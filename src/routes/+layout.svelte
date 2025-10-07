<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <title>MKR Shift — Creative Technology Studio</title>
  <meta
    name="description"
    content="MKR Shift blends 3D printing, digital assets, and immersive experiences to transform ambitious ideas into reality."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
  />
</svelte:head>

<div class="min-h-screen bg-brand-dark text-base-content" data-theme="mkrshift">
  <slot />
</div>
