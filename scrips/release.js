const concurrently = require('concurrently')

const versionBump = []
const release = []
const publish = [
  {
    name: 'publish',
    command: 'npm run rollup && npm publish',
    prefixColor: 'blue',
  },
]

switch (process.argv[2]) {
  case 'patch':
    versionBump.push({
      name: 'bump:version',
      command: `npm version patch && git add package.json package-lock.json`,
      prefixColor: 'blue',
    })
    release.push({
      name: 'release:patch',
      command:
        "changelog -p && git add CHANGELOG.md && git commit -m 'docs: update CHANGELOG.md and version bump' && npm version patch && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  case 'minor':
    versionBump.push({
      name: 'bump:version',
      command: `npm version minor && git add package.json package-lock.json`,
      prefixColor: 'blue',
    })
    release.push({
      name: 'release:minor',
      command:
        "changelog -m && git add CHANGELOG.md && git commit -m 'docs: update CHANGELOG.md and version bump' && npm version minor && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  case 'major':
    versionBump.push({
      name: 'bump:version',
      command: `npm version major && git add package.json package-lock.json`,
      prefixColor: 'blue',
    })
    release.push({
      name: 'release:major',
      command:
        "changelog -M && git add CHANGELOG.md && git commit -m 'docs: update CHANGELOG.md and version bump' && npm version major && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  default:
    break
}

const { result } = concurrently(versionBump, concurrentOpts)

result
  .then(() => concurrently(release, concurrentOpts))
  .then(() => concurrently(publish, concurrentOpts))
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e.message)
  })
