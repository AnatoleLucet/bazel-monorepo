workspace(
  name = 'lang',
  # managed_directories = {"@npm": ["node_modules"]},
)

# load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# http_archive(
#     name = "build_bazel_rules_typescript",
#     url = "https://github.com/bazelbuild/rules_typescript/archive/0.21.0.zip",
#     strip_prefix = "rules_typescript-0.21.0",
# )

# # Fetch our Bazel dependencies that aren't distributed on npm
# load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
# rules_typescript_dependencies()

# # Setup TypeScript toolchain
# load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
# ts_setup_workspace()

# # Setup the Node.js toolchain
# load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")
# node_repositories()

# # Setup Bazel managed npm dependencies with the `yarn_install` rule.
# yarn_install(
#   name = "npm",
#   package_json = "//:package.json",
#   yarn_lock = "//:yarn.lock",
# )

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "da217044d24abd16667324626a33581f3eaccabf80985b2688d6a08ed2f864be",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.37.1/rules_nodejs-0.37.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")
yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()