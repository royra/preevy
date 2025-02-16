---
title: CLI Reference
sidebar_position: 3
---
# Command Line Reference
<!-- usagestop -->
# Commands
<!-- commands -->
- [`preevy down`](#preevy-down)
- [`preevy help [COMMANDS]`](#preevy-help-commands)
- [`preevy init [PROFILE-ALIAS]`](#preevy-init-profile-alias)
- [`preevy logs [SERVICES]`](#preevy-logs-services)
- [`preevy ls`](#preevy-ls)
- [`preevy profile create NAME URL`](#preevy-profile-create-name-url)
- [`preevy profile current`](#preevy-profile-current)
- [`preevy profile import LOCATION`](#preevy-profile-import-location)
- [`preevy profile ls`](#preevy-profile-ls)
- [`preevy profile rm NAME`](#preevy-profile-rm-name)
- [`preevy profile use NAME`](#preevy-profile-use-name)
- [`preevy purge`](#preevy-purge)
- [`preevy up [SERVICE]`](#preevy-up-service)
- [`preevy urls [SERVICE] [PORT]`](#preevy-urls-service-port)
- [`preevy version`](#preevy-version)

## `preevy down`

Delete preview environments

```
USAGE
  $ preevy down [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--id <value>]
    [-f <value>] [-p <value>] [--force] [--wait] [--json]

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  -f, --file=<value>...        [default: ] Compose configuration file
  -p, --project=<value>        Project name. Defaults to the Compose project name
  --force                      Do not error if the environment is not found
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --id=<value>                 Environment id - affects created URLs. If not specified, will try to detect automatically
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>
  --wait                       Wait for resource deletion to complete. If false (the default), the deletion will be
                               started but not waited for

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Delete preview environments
```

_See code: [dist/commands/down/index.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/down/index.ts)_

## `preevy help [COMMANDS]`

Display help for preevy.

```
USAGE
  $ preevy help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for preevy.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.6/src/commands/help.ts)_

## `preevy init [PROFILE-ALIAS]`

Initialize or import a new profile

```
USAGE
  $ preevy init [PROFILE-ALIAS] [-D] [-f <value>]

ARGUMENTS
  PROFILE-ALIAS  [default: default] Alias of the profile

FLAGS
  -f, --from=<value>  Import profile from existing path

GLOBAL FLAGS
  -D, --debug  Enable debug logging

DESCRIPTION
  Initialize or import a new profile
```

_See code: [dist/commands/init/index.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/init/index.ts)_

## `preevy logs [SERVICES]`

Show logs for an existing environment

```
USAGE
  $ preevy logs [SERVICES] [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--id <value>]
    [-f <value>] [-p <value>] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  |
    [--csv | --no-truncate]] [--no-header | ]

ARGUMENTS
  SERVICES  Service name(s). If not specified, will show all services

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  -f, --file=<value>...        [default: ] Compose configuration file
  -p, --project=<value>        Project name. Defaults to the Compose project name
  -x, --extended               show extra columns
  --columns=<value>            only show provided columns (comma-separated)
  --csv                        output is csv format [alias: --output=csv]
  --filter=<value>             filter property by partial string matching, ex: name=foo
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --id=<value>                 Environment id - affects created URLs. If not specified, will try to detect automatically
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>
  --no-header                  hide table header from output
  --no-truncate                do not truncate output to fit screen
  --output=<option>            output in a more machine friendly format
                               <options: csv|json|yaml>
  --sort=<value>               property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  -D, --debug  Enable debug logging

DESCRIPTION
  Show logs for an existing environment
```

_See code: [dist/commands/logs.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/logs.ts)_

## `preevy ls`

List preview environments

```
USAGE
  $ preevy ls [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--columns
    <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header
    | ] [--json]

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  -x, --extended               show extra columns
  --columns=<value>            only show provided columns (comma-separated)
  --csv                        output is csv format [alias: --output=csv]
  --filter=<value>             filter property by partial string matching, ex: name=foo
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>
  --no-header                  hide table header from output
  --no-truncate                do not truncate output to fit screen
  --output=<option>            output in a more machine friendly format
                               <options: csv|json|yaml>
  --sort=<value>               property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  List preview environments
```

_See code: [dist/commands/ls/index.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/ls/index.ts)_

## `preevy profile create NAME URL`

Create a new profile

```
USAGE
  $ preevy profile create NAME URL [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--json]

ARGUMENTS
  NAME  name of the new profile
  URL   url of the new profile store

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Create a new profile
```

## `preevy profile current`

Display current profile in use

```
USAGE
  $ preevy profile current [-D] [--json]

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Display current profile in use
```

## `preevy profile import LOCATION`

Import an existing profile

```
USAGE
  $ preevy profile import LOCATION [-D] [--name <value>] [--json]

ARGUMENTS
  LOCATION  location of the profile

FLAGS
  --name=<value>  name of the profile

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Import an existing profile
```

## `preevy profile ls`

Lists profiles

```
USAGE
  $ preevy profile ls [-D] [--json]

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Lists profiles
```

## `preevy profile rm NAME`

Remove a profile

```
USAGE
  $ preevy profile rm NAME [-D] [--json]

ARGUMENTS
  NAME  name of the profile to remove

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Remove a profile
```

## `preevy profile use NAME`

Set current profile

```
USAGE
  $ preevy profile use NAME [-D] [--json]

ARGUMENTS
  NAME  name of the profile to use

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Set current profile
```

## `preevy purge`

Remove all cloud provider resources

```
USAGE
  $ preevy purge [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--snapshots]
    [--machines] [--key-pair] [--all] [--force] [--wait] [--json]

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  --all                        Remove machines, snapshots and key pairs
  --force                      Do not ask for confirmation
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --key-pair                   Remove key pair
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>
  --machines                   Remove machines
  --snapshots                  Remove snapshots
  --wait                       Wait for resource deletion to complete. If false (the default), the deletion will be
                               started but not waited for

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Remove all cloud provider resources
```

_See code: [dist/commands/purge.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/purge.ts)_

## `preevy up [SERVICE]`

Bring up a preview environment

```
USAGE
  $ preevy up [SERVICE] [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>]
    [--lightsail-availability-zone <value>] [--lightsail-bundle-id
    nano_2_0|micro_2_0|small_2_0|medium_2_0|large_2_0|xlarge_2_0|2xlarge_2_0] [--gce-machine-type <value>] [--id
    <value>] [-f <value>] [-p <value>] [-t <value>] [--tls-hostname <value>] [--insecure-skip-verify] [--columns <value>
    | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

ARGUMENTS
  SERVICE  Service name(s). If not specified, will deploy all services

FLAGS
  -d, --driver=<option>                  Machine driver to use
                                         <options: lightsail|gce|fake>
  -f, --file=<value>...                  [default: ] Compose configuration file
  -p, --project=<value>                  Project name. Defaults to the Compose project name
  -t, --tunnel-url=<value>               [default: ssh+tls://livecycle.run] Tunnel url, specify ssh://hostname[:port] or
                                         ssh+tls://hostname[:port]
  -x, --extended                         show extra columns
  --columns=<value>                      only show provided columns (comma-separated)
  --csv                                  output is csv format [alias: --output=csv]
  --filter=<value>                       filter property by partial string matching, ex: name=foo
  --gce-machine-type=<value>             Machine type to be provisioned
  --gce-project-id=<value>               Google Cloud project ID
  --gce-zone=<value>                     Google Cloud zone in which resources will be provisioned
  --id=<value>                           Environment id - affects created URLs. If not specified, will try to detect
                                         automatically
  --insecure-skip-verify                 Skip TLS or SSH certificate verification
  --lightsail-availability-zone=<value>  AWS availability zone to provision resources in region
  --lightsail-bundle-id=<option>         Lightsail bundle ID (size of instance) to provision. Default: medium_2_0
                                         <options:
                                         nano_2_0|micro_2_0|small_2_0|medium_2_0|large_2_0|xlarge_2_0|2xlarge_2_0>
  --lightsail-region=<option>            AWS region in which resources will be provisioned
                                         <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-
                                         1|ap-southeast-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|e
                                         u-west-3|eu-north-1>
  --no-header                            hide table header from output
  --no-truncate                          do not truncate output to fit screen
  --output=<option>                      output in a more machine friendly format
                                         <options: csv|json|yaml>
  --sort=<value>                         property to sort by (prepend '-' for descending)
  --tls-hostname=<value>                 Override TLS server name when tunneling via HTTPS

GLOBAL FLAGS
  -D, --debug  Enable debug logging

DESCRIPTION
  Bring up a preview environment
```

_See code: [dist/commands/up/index.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/up/index.ts)_

## `preevy urls [SERVICE] [PORT]`

Show urls for an existing environment

```
USAGE
  $ preevy urls [SERVICE] [PORT] [-D] [-d lightsail|gce|fake] [--lightsail-region
    us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-southeast-2|ap-northeast-1|ca-central-1|eu
    -central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1] [--gce-project-id <value>] [--gce-zone <value>] [--id <value>]
    [-f <value>] [-p <value>] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml |  |
    [--csv | --no-truncate]] [--no-header | ] [--json]

ARGUMENTS
  SERVICE  Service name. If not specified, will show all services
  PORT     Service port. If not specified, will show all ports for the specified service

FLAGS
  -d, --driver=<option>        Machine driver to use
                               <options: lightsail|gce|fake>
  -f, --file=<value>...        [default: ] Compose configuration file
  -p, --project=<value>        Project name. Defaults to the Compose project name
  -x, --extended               show extra columns
  --columns=<value>            only show provided columns (comma-separated)
  --csv                        output is csv format [alias: --output=csv]
  --filter=<value>             filter property by partial string matching, ex: name=foo
  --gce-project-id=<value>     Google Cloud project ID
  --gce-zone=<value>           Google Cloud zone in which resources will be provisioned
  --id=<value>                 Environment id - affects created URLs. If not specified, will try to detect automatically
  --lightsail-region=<option>  AWS region in which resources will be provisioned
                               <options: us-east-2|us-east-1|us-west-2|ap-south-1|ap-northeast-2|ap-southeast-1|ap-south
                               east-2|ap-northeast-1|ca-central-1|eu-central-1|eu-west-1|eu-west-2|eu-west-3|eu-north-1>
  --no-header                  hide table header from output
  --no-truncate                do not truncate output to fit screen
  --output=<option>            output in a more machine friendly format
                               <options: csv|json|yaml>
  --sort=<value>               property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Show urls for an existing environment
```

_See code: [dist/commands/urls.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/urls.ts)_

## `preevy version`

Show Preevy version

```
USAGE
  $ preevy version [-D] [--json]

GLOBAL FLAGS
  -D, --debug  Enable debug logging
  --json       Format output as json.

DESCRIPTION
  Show Preevy version
```

_See code: [dist/commands/version.ts](https://github.com/livecycle/preevy/blob/v0.0.23/dist/commands/version.ts)_
<!-- commandsstop -->

