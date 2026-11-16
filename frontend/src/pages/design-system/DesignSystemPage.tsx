
import ColorPalette from '../../components/ui/ColorPalette'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import {
  ArrowRight,
  Sparkles,
  Mail,
  LockKeyhole,
  Search,
} from 'lucide-react'

// Development-only page for reviewing and testing the design system.
// This page will not be included in the public website navigation.

function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">

      {/* Design system page header */}
      <div className="mx-auto mb-12 max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          JingCraft AI
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Design System
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
          A centralized visual foundation for the JingCraft AI
          experience, combining traditional Chinese ceramic heritage
          with modern digital design.
        </p>

        <div className="mt-6 h-px w-full bg-border" />
      </div>

      {/* Color palette preview */}
      <div className="mx-auto max-w-7xl">
        <ColorPalette />
      </div>

      {/* Reusable button component preview */}
      <section className="mx-auto mt-16 max-w-7xl space-y-8">

        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Button Components
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
            Reusable button styles with consistent sizing,
            interaction states, and Motion-powered animations.
          </p>
        </div>

        {/* Button variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Button Variants
          </h3>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-white p-6">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>

        {/* Button sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Button Sizes
          </h3>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-white p-6">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </div>

        {/* Button states */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Button States
          </h3>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-white p-6">
            <Button>Normal State</Button>
            <Button loading>Loading State</Button>
            <Button disabled>Disabled State</Button>
          </div>
        </div>

        {/* Buttons with optional icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Buttons with Icons
          </h3>

          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-white p-6">
            <Button leftIcon={<Sparkles size={16} />}>
              Explore AI Studio
            </Button>

            <Button
              variant="outline"
              rightIcon={<ArrowRight size={16} />}
            >
              Explore Museum
            </Button>
          </div>
        </div>

        {/* Motion interaction testing instructions */}
        <div className="rounded-xl border border-border bg-white p-5">
          <h3 className="font-semibold text-foreground">
            Motion Interaction
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Hover over the buttons to test the subtle lift animation.
            Press a button to test its tap interaction. Disabled and
            loading buttons should not animate.
          </p>
        </div>
      </section>

      {/* Reusable input component preview */}
      <section className="mx-auto mt-20 max-w-7xl space-y-8">

        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Input Components
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
            Accessible form inputs with consistent styling,
            focus interactions, helper messages, and validation states.
          </p>
        </div>

        {/* Basic input examples */}
        <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-white p-6 md:grid-cols-2">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            helperText="Please enter your first and last name."
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            leftIcon={<Mail size={18} />}
            helperText="We will use this email for account communication."
          />

          <Input
            label="Search Museum"
            placeholder="Search ceramic collections..."
            leftIcon={<Search size={18} />}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftIcon={<LockKeyhole size={18} />}
            helperText="Click the eye icon to show or hide your password."
          />
        </div>

        {/* Input validation states */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Validation States
          </h3>

          <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-white p-6 md:grid-cols-2">
            <Input
              label="Default State"
              placeholder="Enter your information"
            />

            <Input
              label="Success State"
              defaultValue="shahariar@example.com"
              type="email"
              success="Email address looks good."
            />

            <Input
              label="Error State"
              defaultValue="invalid-email"
              type="email"
              error="Please enter a valid email address."
            />

            <Input
              label="Disabled State"
              defaultValue="This field is disabled"
              disabled
            />
          </div>
        </div>

        {/* Input interaction testing instructions */}
        <div className="rounded-xl border border-border bg-white p-5">
          <h3 className="font-semibold text-foreground">
            Input Interaction
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Test keyboard navigation, focus styling, password visibility,
            and validation messages. Inputs use native HTML behavior
            and support standard form attributes.
          </p>
        </div>
      </section>

      {/* Reusable select component preview */}
      <section className="mx-auto mt-20 max-w-7xl space-y-8">

        <div>
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Select Components
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
            Custom dropdown components with searchable options,
            keyboard navigation, and accessible validation states.
          </p>
        </div>

        {/* Basic select examples */}
        <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-white p-6 md:grid-cols-2">

          <Select
            label="Chinese Dynasty"
            placeholder="Choose a dynasty"
            options={[
              { label: 'Tang Dynasty', value: 'tang' },
              { label: 'Song Dynasty', value: 'song' },
              { label: 'Yuan Dynasty', value: 'yuan' },
              { label: 'Ming Dynasty', value: 'ming' },
              { label: 'Qing Dynasty', value: 'qing' },
            ]}
            helperText="Select a historical period to explore."
          />

          <Select
            label="Ceramic Category"
            placeholder="Select ceramic category"
            searchable
            searchPlaceholder="Search categories..."
            options={[
              { label: 'Blue and White Porcelain', value: 'blue-white' },
              { label: 'Celadon', value: 'celadon' },
              { label: 'Famille Rose', value: 'famille-rose' },
              { label: 'Doucai', value: 'doucai' },
              { label: 'Jun Ware', value: 'jun-ware' },
            ]}
            helperText="Search and select a ceramic category."
          />

          <Select
            label="Design Style"
            placeholder="Choose a design style"
            defaultValue="traditional"
            options={[
              { label: 'Traditional Chinese', value: 'traditional' },
              { label: 'Minimalist', value: 'minimalist' },
              { label: 'Contemporary', value: 'contemporary' },
              { label: 'Experimental', value: 'experimental' },
            ]}
          />

          <Select
            label="Museum Collection"
            placeholder="Choose a collection"
            options={[
              { label: 'Imperial Collection', value: 'imperial' },
              { label: 'Royal Ceramics', value: 'royal' },
              { label: 'Ancient Pottery', value: 'pottery', disabled: true },
              { label: 'Contemporary Works', value: 'contemporary' },
            ]}
            helperText="Some collections are currently unavailable."
          />
        </div>

        {/* Select validation states */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Validation States
          </h3>

          <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-white p-6 md:grid-cols-2">

            <Select
              label="Default State"
              placeholder="Select an option"
              options={[
                { label: 'Option One', value: 'one' },
                { label: 'Option Two', value: 'two' },
              ]}
            />

            <Select
              label="Success State"
              defaultValue="verified"
              options={[
                { label: 'Verified', value: 'verified' },
                { label: 'Pending', value: 'pending' },
              ]}
              success="Your selection has been verified."
            />

            <Select
              label="Error State"
              placeholder="Select a required option"
              options={[
                { label: 'Option One', value: 'one' },
                { label: 'Option Two', value: 'two' },
              ]}
              error="Please select a valid option."
            />

            <Select
              label="Disabled State"
              placeholder="Selection unavailable"
              disabled
              options={[
                { label: 'Option One', value: 'one' },
                { label: 'Option Two', value: 'two' },
              ]}
            />
          </div>
        </div>

        {/* Select interaction testing instructions */}
        <div className="rounded-xl border border-border bg-white p-5">
          <h3 className="font-semibold text-foreground">
            Select Interaction
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Test dropdown opening, searchable options, disabled options,
            keyboard navigation, Escape to close, and clear selection.
            The component supports both controlled and uncontrolled usage.
          </p>
        </div>
      </section>

      {/* Development notice */}
      <footer className="mx-auto mt-16 max-w-7xl border-t border-border pt-6">
        <p className="text-xs text-text-muted">
          Internal development preview — Not part of the public website.
        </p>
      </footer>
    </main>
  )
}

export default DesignSystemPage
