(() => {
      'use strict';
      // A locally rendered point cloud: no images, libraries, or network dependency.
      const canvas = document.getElementById('orb');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      // Read the same palette as the CSS so the globe stays in sync with the UI.
      const theme = getComputedStyle(document.documentElement);
      const colors = {
        accent: theme.getPropertyValue('--accent-rgb').trim(),
        secondary: theme.getPropertyValue('--secondary-rgb').trim(),
        muted: theme.getPropertyValue('--dim-rgb').trim(),
        glow: theme.getPropertyValue('--accent').trim(),
        highlight: theme.getPropertyValue('--accent-hover').trim(),
      };
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const points = [];
      const count = 1050;
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        points.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius]);
      }
      let width = 0, height = 0, angle = .35, frame = 0, previousTime = 0, inView = true;
      const tilt = -.24;
      function project(x, y, z, scale, cx, cy) {
        const rx = x * Math.cos(angle) + z * Math.sin(angle);
        const rz = -x * Math.sin(angle) + z * Math.cos(angle);
        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
        return [cx + rx * scale, cy + ry * scale, depth];
      }
      function drawCurve(coordinates, scale, cx, cy, alpha, lineWidth) {
        ctx.lineWidth = lineWidth;
        for (let i = 1; i < coordinates.length; i++) {
          const a = project(...coordinates[i - 1], scale, cx, cy);
          const b = project(...coordinates[i], scale, cx, cy);
          const opacity = alpha * (.28 + ((a[2] + 1) / 2) * .72);
          ctx.strokeStyle = `rgba(${colors.secondary}, ${opacity})`;
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        }
      }
      const latitudeCurves = [], longitudeCurves = [];
      for (let lat = -3; lat <= 3; lat++) {
        const phi = lat * Math.PI / 9, curve = [];
        for (let step = 0; step <= 80; step++) {
          const theta = step / 80 * Math.PI * 2;
          curve.push([Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi)]);
        }
        latitudeCurves.push(curve);
      }
      for (let lon = 0; lon < 10; lon++) {
        const theta = lon / 10 * Math.PI, curve = [];
        for (let step = 0; step <= 80; step++) {
          const phi = step / 80 * Math.PI * 2;
          curve.push([Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi)]);
        }
        longitudeCurves.push(curve);
      }
      function draw() {
        if (!width || !height) return;
        ctx.clearRect(0, 0, width, height);
        const cx = width * .5, cy = height * .5;
        const scale = Math.min(width * .32, height * .36);
        // Quiet construction marks around the central sphere.
        ctx.strokeStyle = `rgba(${colors.muted}, .18)`; ctx.lineWidth = .7;
        ctx.setLineDash([2, 5]); ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.28, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
        ctx.strokeStyle = `rgba(${colors.secondary}, .35)`;
        for (let i = 0; i < 4; i++) {
          const a = i * Math.PI / 2;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a) * scale * 1.23, cy + Math.sin(a) * scale * 1.23);
          ctx.lineTo(cx + Math.cos(a) * scale * 1.33, cy + Math.sin(a) * scale * 1.33); ctx.stroke();
        }
        for (const curve of latitudeCurves) drawCurve(curve, scale, cx, cy, .24, .65);
        for (const curve of longitudeCurves) drawCurve(curve, scale, cx, cy, .22, .65);
        const projected = points.map(point => project(...point, scale, cx, cy)).sort((a, b) => a[2] - b[2]);
        for (const point of projected) {
          const front = (point[2] + 1) / 2;
          ctx.fillStyle = `rgba(${colors.accent}, ${.1 + front * .65})`;
          ctx.beginPath(); ctx.arc(point[0], point[1], .55 + front * .65, 0, Math.PI * 2); ctx.fill();
        }
        // Two asymmetric orbits give the globe its own little solar system.
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(-.39);
        ctx.lineWidth = .8; ctx.strokeStyle = `rgba(${colors.accent}, .6)`;
        ctx.beginPath(); ctx.ellipse(0, 0, scale * 1.5, scale * .36, 0, 0, Math.PI * 2); ctx.stroke();
        const satelliteAngle = angle * .65 + .55;
        const sx = Math.cos(satelliteAngle) * scale * 1.5, sy = Math.sin(satelliteAngle) * scale * .36;
        ctx.shadowBlur = 16; ctx.shadowColor = colors.glow; ctx.fillStyle = colors.highlight;
        ctx.beginPath(); ctx.arc(sx, sy, 3.4, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0; ctx.restore();
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(.65);
        ctx.strokeStyle = `rgba(${colors.secondary}, .4)`; ctx.lineWidth = .6;
        ctx.beginPath(); ctx.ellipse(0, 0, scale * 1.29, scale * .45, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      }
      function animate(timestamp) {
        frame = 0;
        if (previousTime) angle += Math.min(timestamp - previousTime, 64) * .000045;
        previousTime = timestamp; draw();
        if (!motion.matches && inView && !document.hidden) frame = requestAnimationFrame(animate);
      }
      function syncAnimation() {
        if (frame) cancelAnimationFrame(frame);
        frame = 0; previousTime = 0; draw();
        if (!motion.matches && inView && !document.hidden) frame = requestAnimationFrame(animate);
      }
      function resizeCanvas() {
        const bounds = canvas.getBoundingClientRect(); width = bounds.width; height = bounds.height;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0); draw();
      }
      if ('ResizeObserver' in window) new ResizeObserver(resizeCanvas).observe(canvas);
      else window.addEventListener('resize', resizeCanvas);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
          inView = entries[0].isIntersecting; syncAnimation();
        }, { rootMargin: '60px' }).observe(canvas);
      }
      motion.addEventListener('change', syncAnimation);
      document.addEventListener('visibilitychange', () => {
        syncAnimation();
      });
      resizeCanvas(); syncAnimation();
    })();
