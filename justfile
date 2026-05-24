[private]
default:
    @just --list --unsorted --list-heading $'Available commands:\n'

set dotenv-load

vendor_dir := "vendor/react-notion-x"

[group('setup')]
[doc('Install runtime versions via asdf')]
asdf-install:
    @echo "Installing specified runtime versions:"
    @asdf install
    @echo "Currently installed runtime versions:"
    @asdf current

[group('setup')]
[doc('Create .env from .env.example if it does not exist')]
env-init:
    @if [ ! -e .env ]; then \
        cp .env.example .env; \
        echo "Created .env file. Please edit it according to your setup."; \
    fi

[group('setup')]
[doc('Install dependencies')]
deps-install:
    @pnpm install

[group('setup')]
[doc('Install dependencies with a frozen lockfile (CI/production)')]
deps-install-frozen:
    @pnpm install --frozen-lockfile

[group('setup')]
[doc('Install pre-commit hooks')]
pre-commit-init:
    @pre-commit install -t pre-commit -t commit-msg

[group('setup')]
[doc('Initialize local environment for development')]
setup-init: asdf-install env-init deps-install pre-commit-init

[group('vendor')]
[doc('Build the react-notion-x submodule')]
vendor-build:
    @git submodule update --init --recursive
    @pnpm --dir {{ vendor_dir }} install
    @pnpm --dir {{ vendor_dir }} build

[group('app')]
[doc('Run the development server')]
app-dev: vendor-build
    @pnpm dev

[group('app')]
[doc('Build the application for production')]
app-build: vendor-build
    @pnpm build

[group('app')]
[doc('Start the production server')]
app-start: app-build
    @pnpm start

[group('quality')]
[doc('Run the linter')]
code-lint:
    @pnpm lint

[group('quality')]
[doc('Run the formatter')]
code-format:
    @pnpm format

[group('quality')]
[doc('Update pre-commit hooks to latest versions')]
pre-commit-update:
    @pre-commit autoupdate

[group('quality')]
[doc('Run pre-commit hooks against all files')]
pre-commit-run:
    @pre-commit run --all-files

[group('supabase')]
[doc('Start Supabase containers')]
supabase-start:
    @supabase start

[group('supabase')]
[doc('Stop Supabase containers')]
supabase-stop:
    @supabase stop

[group('supabase')]
[doc('Check Supabase status')]
supabase-status:
    @supabase status

[group('supabase')]
[doc('Reset Supabase database (wipe + re-apply migrations and seeds)')]
supabase-reset:
    @supabase db reset

[group('supabase')]
[doc('Create a new Supabase migration')]
supabase-create-migration name:
    @supabase migration new {{ name }}

[group('supabase')]
[doc('Create migration by diffing local against remote schema')]
supabase-db-diff name:
    @supabase db diff --use-migra -f {{ name }}

[group('supabase')]
[doc('Generate TypeScript types from Supabase schema')]
supabase-generate-types:
    @supabase gen types typescript --local > src/integrations/supabase/database.types.ts

[group('ngrok')]
[doc('Run ngrok for the development server')]
ngrok-dev:
    @ngrok http 3000

[group('ngrok')]
[doc('Run ngrok for the production server')]
ngrok-prod:
    @ngrok http 55203

[group('security')]
[doc('Create the .secrets.baseline file')]
detect-secrets-create-baseline:
    @detect-secrets scan > .secrets.baseline

[group('security')]
[doc('Audit updates to .secrets.baseline')]
detect-secrets-audit:
    @detect-secrets audit .secrets.baseline

[group('security')]
[doc('Scan repository for secrets')]
detect-secrets-scan:
    @detect-secrets scan --baseline .secrets.baseline

[group('misc')]
[doc('Clean build artifacts and dependencies')]
repo-clean:
    @echo "Cleaning project..."
    @rm -rf node_modules .next
    @find {{ vendor_dir }} -type d -name 'node_modules' -exec rm -rf {} +
    @find {{ vendor_dir }} -type d -name 'build' -exec rm -rf {} +
    @find {{ vendor_dir }} -type d -name '.turbo' -exec rm -rf {} +
    @echo "Done."
