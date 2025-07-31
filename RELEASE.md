# Release process

1. Update the version of the library in `package.json`.
2. Update the `CHANGELOG.md`.
3. Push the generated changes to the repository.
4. Clean the project.
```shell
npm run clean
```
5. Build the library.
```shell
npm run build
```
6. Release the library to NPM.
```shell
npm publish
```
7. Create a GitHub release with the contents of the `CHANGELOG.md`.
