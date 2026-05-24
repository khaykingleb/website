# Website

This is the repository for my [personal website](https://khaykingleb.com).

## Prerequisites

You'll need [asdf](https://asdf-vm.com/) and [just](https://github.com/casey/just) installed.

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/khaykingleb/khaykingleb-com.git \
        && cd khaykingleb-com
    ```

2.  Initialize & setup:
    ```bash
    just setup-init
    ```

    This installs tools, dependencies, creates `.env`, and sets up pre-commit hooks.

3.  Configure environment:
    Edit the created `.env` file with your Supabase and Notion API keys.

## Usage

For a full list of available recipes, run:

```bash
just
```

To start the development server:

```bash
just supabase-start \
    && just app-dev
```

To run the production build locally:

```bash
just supabase-start \
    && just app-start
```
