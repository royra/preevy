import { Writable } from 'stream'
import * as k8s from '@kubernetes/client-node'
import { Logger, ProcessOutputBuffers } from '@preevy/core'
import { BaseExecOpts } from './common'
import apiExec from './api'
import kubectlExec from './kubectl'

export { BaseExecOpts } from './common'

export default (
  { kubeconfig, namespace, k8sExec, log }: { kubeconfig?: string; namespace: string; k8sExec: k8s.Exec; log: Logger },
) => {
  const kExec = kubectlExec({ kubeconfig, namespace })
  const aExec = apiExec({ namespace, k8sExec, log })
  function exec(opts: BaseExecOpts & { stdout: Writable; stderr: Writable }): Promise<{ code: number }>
  function exec(opts: BaseExecOpts): Promise<{ code: number; output: ProcessOutputBuffers }>
  function exec(
    opts: BaseExecOpts & { stdout?: Writable; stderr?: Writable },
  ): Promise<{ code: number; output?: ProcessOutputBuffers }> {
    return (opts.stdin ? kExec : aExec)(opts)
  }

  return exec
}
