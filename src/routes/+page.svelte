<script lang="ts">
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const heroStats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Rating', value: '5★' }
  ];

  const services = [
    {
      title: '3D Printing',
      description:
        'High-quality 3D printing services for rapid prototyping, custom designs, and production-ready parts.',
      highlights: ['Rapid Prototyping', 'Custom Designs', 'Multi-material Builds', 'Precision Engineering']
    },
    {
      title: 'Digital Assets',
      description:
        'Create stunning 3D assets for your brand with expert modeling, textures, and immersive digital experiences.',
      highlights: ['3D Models', 'Textures', 'Animations', 'Virtual Assets']
    },
    {
      title: 'Immersive Experiences',
      description:
        'VR/AR solutions that bring your ideas to life with interactive storytelling, training, and experiential design.',
      highlights: ['Virtual Reality', 'Augmented Reality', 'Interactive Training', 'Digital Twin']
    }
  ];

  const differentiators = [
    {
      title: 'Fast Delivery',
      description: 'Agile production pipelines that keep projects moving with rapid iteration and approvals.'
    },
    {
      title: 'Premium Quality',
      description: 'Meticulous craft, calibrated equipment, and QA workflows ensure pixel-perfect results.'
    },
    {
      title: 'Expert Team',
      description: 'Multidisciplinary creators blend artistry with engineering for boundary-pushing outcomes.'
    }
  ];

  const milestones = [
    {
      label: 'Tromsø, Norway',
      title: 'Pioneering Digital Innovation',
      description:
        "Founded in the creative heart of Tromsø, MKR Shift stands at the intersection of technology and artistry. We're passionate about pushing the boundaries of what's possible in digital creation.",
      bullet:
        'Our team of skilled creators combines technical expertise with artistic vision to deliver solutions that not only meet but exceed expectations. From rapid prototyping to immersive digital experiences, you\'re partners in innovation.'
    }
  ];

  const team = [
    {
      name: 'Cris Andersen',
      role: 'Creative Director',
      specialty: '3D Printing Specialist',
      projects: 174,
      rating: 5,
      joined: 2019,
      location: 'Tromsø, Norway'
    },
    {
      name: 'Sebastian Berg',
      role: '3D Printing Specialist',
      specialty: 'Production Lead',
      projects: 163,
      rating: 5,
      joined: 2020,
      location: 'Oslo, Norway'
    },
    {
      name: 'Kim Larsen',
      role: 'Digital Asset Artist',
      specialty: 'Creative',
      projects: 156,
      rating: 5,
      joined: 2021,
      location: 'Tromsø, Norway'
    },
    {
      name: 'Ismet Yilmaz',
      role: 'VR/AR Developer',
      specialty: 'Experiential Lead',
      projects: 168,
      rating: 5,
      joined: 2020,
      location: 'Bergen, Norway'
    },
    {
      name: 'Bjørn Eriksen',
      role: 'Project Manager',
      specialty: 'Client Success',
      projects: 179,
      rating: 5,
      joined: 2018,
      location: 'Trondheim, Norway'
    }
  ];

  const social = [
    {
      platform: 'TikTok',
      username: '@mkrshift',
      description: 'Behind-the-scenes process videos, timelapses, and creator highlights.'
    },
    {
      platform: 'Instagram',
      username: '@mkrshiftstudio',
      description: 'Immersive visuals, project teases, and community spotlights.'
    },
    {
      platform: 'LinkedIn',
      username: 'MKR Shift',
      description: 'Company updates, case studies, and partnership announcements.'
    }
  ];

  const contactMethods = [
    {
      label: 'Email',
      value: 'hello@mkrshift.no'
    },
    {
      label: 'Phone',
      value: '+47 123 456 789'
    },
    {
      label: 'Location',
      value: 'Tromsø, Norway'
    }
  ];
</script>

<div class="relative isolate overflow-hidden">
  <section class="hero-bg relative">
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-primary/15 to-transparent" aria-hidden="true"></div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-12">
      <header class="flex flex-wrap items-center justify-between gap-6">
        <a class="flex items-center gap-3 text-lg font-semibold tracking-wide text-brand-primary" href="/">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-primary">
            MKR
          </span>
          MKR Shift
        </a>
        <nav class="flex flex-1 items-center justify-end gap-6 text-sm font-medium">
          {#each navLinks as link}
            <a class="footer-link" href={link.href}>{link.label}</a>
          {/each}
          <a class="btn btn-sm rounded-full border-none bg-brand-primary text-neutral font-semibold shadow-glow" href="#contact">
            Get Started
          </a>
        </nav>
      </header>
      <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div class="space-y-10">
          <div class="space-y-6">
            <span class="section-label">Innovation Meets Creativity</span>
            <h1 class="text-4xl font-display font-semibold text-base-content sm:text-5xl lg:text-6xl">
              Bringing Your Ideas to Life
            </h1>
            <p class="max-w-2xl text-lg text-neutral-content/80">
              We're a creative studio specializing in 3D printing, digital assets, and immersive experiences—transforming
              concepts into reality from Tromsø, Norway.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <a
              class="btn btn-primary btn-wide rounded-full font-semibold text-base-content"
              href="#contact"
            >
              Start Your Project
            </a>
            <button class="btn btn-ghost rounded-full text-brand-primary" type="button">Explore Services</button>
          </div>
          <div class="gradient-divider"></div>
          <dl class="grid gap-6 sm:grid-cols-3">
            {#each heroStats as stat}
              <div class="glass-panel rounded-2xl p-6 text-center">
                <dt class="text-sm uppercase tracking-[0.25em] text-neutral-content/60">{stat.label}</dt>
                <dd class="mt-3 text-3xl font-semibold text-brand-primary">{stat.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div class="glass-panel relative overflow-hidden rounded-[2.25rem] border border-brand-primary/20 p-8">
          <div class="absolute right-8 top-8 flex items-center gap-2 rounded-full bg-brand-muted/60 px-3 py-1 text-xs text-neutral-content/70">
            <span class="h-2 w-2 rounded-full bg-green-400"></span>
            Accepting new projects
          </div>
          <div class="mt-10 space-y-6">
            <h2 class="text-2xl font-display font-semibold text-brand-primary">Why partners choose MKR Shift</h2>
            <ul class="space-y-4 text-neutral-content/80">
              <li class="flex gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-primary"></span>
                Elite creators blending artistry with technical mastery for breakthrough results.
              </li>
              <li class="flex gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-primary"></span>
                Collaborative, transparent process designed to keep you informed at every milestone.
              </li>
              <li class="flex gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-primary"></span>
                Advanced tooling and immersive storytelling to launch experiences that resonate.
              </li>
            </ul>
            <div class="flex items-center gap-4 rounded-2xl bg-brand-muted/60 p-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
                <span class="text-xl font-semibold">15+</span>
              </div>
              <div class="space-y-1 text-sm">
                <p class="font-semibold text-base-content">Dedicated Experts</p>
                <p class="text-neutral-content/70">Our senior team guides every engagement end-to-end.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="mx-auto max-w-7xl px-6 py-24 lg:px-12">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div class="space-y-4">
        <span class="section-label">Our Services</span>
        <h2 class="text-4xl font-display font-semibold">What We Do Best</h2>
        <p class="max-w-2xl text-neutral-content/80">
          From concept to reality, we offer comprehensive solutions that leverage cutting-edge technology to bring
          ambitious ideas to life.
        </p>
      </div>
      <a class="btn btn-outline btn-sm rounded-full border-brand-primary/40 text-brand-primary" href="#contact">
        View Pricing Guide
      </a>
    </div>
    <div class="card-grid mt-12">
      {#each services as service}
        <article class="glass-panel group flex h-full flex-col justify-between rounded-3xl p-8 transition duration-200 hover:border-brand-primary/40">
          <div class="space-y-4">
            <h3 class="text-2xl font-display font-semibold text-brand-primary">{service.title}</h3>
            <p class="text-neutral-content/80">{service.description}</p>
            <ul class="space-y-3 text-sm text-neutral-content/70">
              {#each service.highlights as item}
                <li class="flex items-center gap-3">
                  <span class="inline-flex h-2 w-2 rounded-full bg-brand-primary/80"></span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
          <button class="btn btn-ghost mt-6 self-start rounded-full text-brand-primary">Book a discovery call</button>
        </article>
      {/each}
    </div>
    <div class="mt-12 grid gap-6 lg:grid-cols-3">
      {#each differentiators as item}
        <div class="glass-panel rounded-3xl p-6">
          <h3 class="text-xl font-display font-semibold text-base-content">{item.title}</h3>
          <p class="mt-3 text-sm text-neutral-content/70">{item.description}</p>
        </div>
      {/each}
      <div class="glass-panel rounded-3xl p-6">
        <h3 class="text-xl font-display font-semibold text-base-content">Global Reach</h3>
        <p class="mt-3 text-sm text-neutral-content/70">
          We collaborate with innovators worldwide, delivering localized experiences with a cohesive global vision.
        </p>
      </div>
    </div>
  </section>

  <section id="about" class="bg-brand-muted/40 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-12">
      {#each milestones as milestone}
        <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div class="space-y-6">
            <span class="section-label">{milestone.label}</span>
            <h2 class="text-4xl font-display font-semibold text-brand-primary">{milestone.title}</h2>
            <p class="text-neutral-content/80">{milestone.description}</p>
            <p class="text-neutral-content/70">{milestone.bullet}</p>
            <div class="flex flex-wrap gap-3 pt-4 text-sm">
              <span class="badge-soft">Innovation Strategy</span>
              <span class="badge-soft">Sustainable Materials</span>
              <span class="badge-soft">Immersive Storytelling</span>
            </div>
          </div>
          <div class="glass-panel relative overflow-hidden rounded-[2.5rem] border border-brand-primary/20 p-10 text-center">
            <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-primary/15 text-brand-primary">
              <span class="text-4xl">🤝</span>
            </div>
            <h3 class="mt-6 text-2xl font-display font-semibold text-base-content">Our Creative Team</h3>
            <p class="mt-3 text-neutral-content/70">
              We bring together designers, engineers, storytellers, and technologists to craft experiences that inspire.
            </p>
            <div class="mt-6 grid gap-3 text-sm text-left">
              <div class="flex items-center justify-between rounded-2xl bg-brand-muted/60 px-4 py-3">
                <span class="text-neutral-content/70">Established</span>
                <span class="font-semibold text-base-content">2019</span>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-brand-muted/60 px-4 py-3">
                <span class="text-neutral-content/70">Team Members</span>
                <span class="font-semibold text-base-content">15+</span>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-brand-muted/60 px-4 py-3">
                <span class="text-neutral-content/70">Disciplines</span>
                <span class="font-semibold text-base-content">3D · XR · Design</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-24 lg:px-12">
    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <span class="section-label">Meet Our Team</span>
        <h2 class="mt-4 text-4xl font-display font-semibold">The Creative Minds Behind MKR Shift</h2>
        <p class="mt-3 max-w-3xl text-neutral-content/80">
          Our talented team of creators, innovators, and technologists is dedicated to bringing your ideas to life with
          precision and imagination.
        </p>
      </div>
      <a class="btn btn-outline btn-sm rounded-full border-brand-primary/40 text-brand-primary" href="#contact">
        Meet the Crew
      </a>
    </div>
    <div class="mt-12 grid gap-6 lg:grid-cols-5">
      {#each team as member}
        <article class="glass-panel flex h-full flex-col justify-between rounded-3xl p-6">
          <header class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="badge-soft">{member.specialty}</span>
              <span class="text-sm text-brand-primary">{member.rating}.0</span>
            </div>
            <h3 class="text-xl font-display font-semibold text-base-content">{member.name}</h3>
            <p class="text-sm text-neutral-content/70">{member.role}</p>
          </header>
          <dl class="mt-6 space-y-2 text-sm text-neutral-content/70">
            <div class="flex items-center justify-between">
              <dt>Projects</dt>
              <dd class="font-semibold text-base-content">{member.projects}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt>Joined</dt>
              <dd class="font-semibold text-base-content">{member.joined}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt>Location</dt>
              <dd class="font-semibold text-base-content">{member.location}</dd>
            </div>
          </dl>
        </article>
      {/each}
    </div>
  </section>

  <section class="bg-brand-muted/40 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-12">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span class="section-label">Behind the Scenes</span>
          <h2 class="mt-4 text-4xl font-display font-semibold">Follow Our Creative Process</h2>
          <p class="mt-3 max-w-3xl text-neutral-content/80">
            Dive into our creative lab across social platforms. Discover prototypes, motion tests, and the talented people
            shaping each release.
          </p>
        </div>
        <a class="btn btn-ghost btn-sm rounded-full text-brand-primary" href="#contact">Request a media kit</a>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        {#each social as channel}
          <article class="glass-panel flex h-full flex-col justify-between rounded-3xl p-6">
            <header class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="badge-soft">{channel.platform}</span>
                <span class="text-brand-primary">{channel.username}</span>
              </div>
              <p class="text-sm text-neutral-content/70">{channel.description}</p>
            </header>
            <button class="btn btn-ghost mt-6 self-start rounded-full text-brand-primary">Follow us</button>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="contact" class="mx-auto max-w-7xl px-6 py-24 lg:px-12">
    <div class="glass-panel grid gap-12 rounded-[2.5rem] p-10 lg:grid-cols-[minmax(0,1.15fr)_1fr]">
      <div>
        <span class="section-label">Get in Touch</span>
        <h2 class="mt-4 text-4xl font-display font-semibold text-base-content">Let's Create Something Amazing</h2>
        <p class="mt-4 max-w-2xl text-neutral-content/80">
          Have a project in mind? We'd love to hear about it. Send us a message and let's bring your ideas to life within 24
          hours.
        </p>
        <form class="mt-10 grid gap-6" aria-label="Project inquiry form">
          <div class="grid gap-6 md:grid-cols-2">
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Your full name</span>
              </div>
              <input class="input glass-panel ring-hover" name="name" placeholder="Jane Doe" type="text" />
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Work email</span>
              </div>
              <input class="input glass-panel ring-hover" name="email" placeholder="you@email.com" type="email" />
            </label>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Company</span>
              </div>
              <input class="input glass-panel ring-hover" name="company" placeholder="Your company" type="text" />
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Phone</span>
              </div>
              <input class="input glass-panel ring-hover" name="phone" placeholder="+47 123 456 789" type="tel" />
            </label>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Project Type</span>
              </div>
              <select class="select glass-panel ring-hover" name="project">
                <option selected>Select a service</option>
                <option>3D Printing</option>
                <option>Digital Assets</option>
                <option>Immersive Experiences</option>
              </select>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Budget Range</span>
              </div>
              <select class="select glass-panel ring-hover" name="budget">
                <option selected>Select budget</option>
                <option>$5k – $15k</option>
                <option>$15k – $35k</option>
                <option>$35k+</option>
              </select>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text text-neutral-content/70">Timeline</span>
              </div>
              <select class="select glass-panel ring-hover" name="timeline">
                <option selected>Select timeline</option>
                <option>2-4 weeks</option>
                <option>1-3 months</option>
                <option>3+ months</option>
              </select>
            </label>
          </div>
          <label class="form-control">
            <div class="label">
              <span class="label-text text-neutral-content/70">Project Details</span>
            </div>
            <textarea
              class="textarea glass-panel min-h-[140px] ring-hover"
              name="details"
              placeholder="Tell us about your goals, challenges, and success metrics."
            ></textarea>
          </label>
          <div class="flex flex-wrap items-center justify-between gap-4">
            <label class="flex items-center gap-3 text-sm text-neutral-content/70">
              <input class="checkbox border-brand-primary/40 bg-brand-muted/60" type="checkbox" />
              Subscribe to monthly studio updates
            </label>
            <button class="btn btn-primary rounded-full px-8 font-semibold text-base-content" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <aside class="flex flex-col justify-between gap-8">
        <div class="glass-panel rounded-[1.75rem] p-8">
          <h3 class="text-xl font-display font-semibold text-base-content">Team Member Details</h3>
          <p class="mt-2 text-sm text-neutral-content/70">
            Talented digital artists specializing in 3D models and immersive digital experiences.
          </p>
          <div class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-content/70">Expertise</span>
              <span class="badge-soft">3D Modeling</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-content/70">Location</span>
              <span class="text-sm font-semibold text-base-content">Tromsø, Norway</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-content/70">Joined</span>
              <span class="text-sm font-semibold text-base-content">2021</span>
            </div>
          </div>
        </div>
        <div class="glass-panel rounded-[1.75rem] p-8 space-y-6">
          <h3 class="text-xl font-display font-semibold text-base-content">Contact Information</h3>
          <ul class="space-y-5 text-sm text-neutral-content/70">
            {#each contactMethods as method}
              <li class="flex items-center gap-4">
                <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                  •
                </span>
                <div>
                  <p class="text-xs uppercase tracking-[0.25em] text-neutral-content/50">{method.label}</p>
                  <p class="text-base-content">{method.value}</p>
                </div>
              </li>
            {/each}
          </ul>
          <div class="rounded-2xl bg-brand-muted/60 p-5 text-sm text-neutral-content/70">
            <p class="font-semibold text-base-content">Average Response</p>
            <p class="mt-1 text-neutral-content/60">Within 24 hours on business days</p>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <footer class="border-t border-brand-muted/40 bg-brand-dark/95">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-12">
      <div class="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
        <div class="space-y-4">
          <a class="flex items-center gap-3 text-lg font-semibold text-brand-primary" href="/">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-primary">
              MKR
            </span>
            MKR Shift
          </a>
          <p class="text-sm text-neutral-content/70">
            Transforming ideas into reality through innovative 3D printing, digital assets, and immersive experiences.
          </p>
        </div>
        <div class="space-y-3 text-sm">
          <h3 class="text-xs uppercase tracking-[0.25em] text-neutral-content/50">Services</h3>
          <a class="footer-link block" href="#services">3D Printing</a>
          <a class="footer-link block" href="#services">Digital Assets</a>
          <a class="footer-link block" href="#services">Immersive Experiences</a>
        </div>
        <div class="space-y-3 text-sm">
          <h3 class="text-xs uppercase tracking-[0.25em] text-neutral-content/50">Company</h3>
          <a class="footer-link block" href="#about">About Us</a>
          <a class="footer-link block" href="/portfolio">Portfolio</a>
          <a class="footer-link block" href="/careers">Careers</a>
        </div>
        <div class="space-y-3 text-sm">
          <h3 class="text-xs uppercase tracking-[0.25em] text-neutral-content/50">Connect</h3>
          <a class="footer-link block" href="#contact">LinkedIn</a>
          <a class="footer-link block" href="#contact">Instagram</a>
          <a class="footer-link block" href="#contact">TikTok</a>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-4 border-t border-brand-muted/40 pt-6 text-xs text-neutral-content/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MKR Shift. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="footer-link" href="/privacy">Privacy</a>
          <a class="footer-link" href="/terms">Terms</a>
          <a class="footer-link" href="/accessibility">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
</div>
