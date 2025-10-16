# Pierre VS Code Theme

![Pierre Theme screenshot](https://github.com/user-attachments/assets/c9d0a316-9549-45c4-bca9-c0bab06dc837)

## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=pierre-computer-co.pierre-vscode-theme).
2. Click on the "Install" button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme). Two themes are included:
    - `Pierre Light`
    - `Pierre Dark`

## Override

To override this (or any other) theme in your personal config file, please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation. This is handy for small tweaks to the theme without having to fork and maintain your own theme.

## Contribute

1. Clone and open this [repo](https://github.com/pierredotco/pierre-vscode-theme) in VS Code
2. Run `yarn` to install the dependencies.
3. Press `F5` to open a new window with your extension loaded
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "Pierre…" theme you want to test.
5. Make changes to the [`/src/theme.ts`](https://github.com/pierredotco/pierre-vscode-theme/blob/main/src/theme.ts) file.
6. Run `npm run build` to update the theme. You can also run `npm run start` instead to automatically rebuild the theme while making changes and no reloading should be necessary.
7. Once you're happy, commit your changes and open a PR.

## Scripts

| Script | Description |
| --- | --- |
| `npm run build` | Builds the theme `.json` files in `./themes` directory |
| `npm run package` | Compiles the theme `.vsix` file at the project root |
| `npm start` | Automatically runs build on file change |

## Credit

This theme was built on top of [GitHub's VS Code Theme](https://github.com/primer/github-vscode-theme). All credit to them for the technique and build tooling, which we've since iterated on for more specific language tokens.
