import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import SelectTokenCard from './SelectTokenCard'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'

export function SelectTokenDisclaimer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className=" rounded-3xl  p-0 ">
        <div className=" boxshadow h-full w-full rounded-3xl border border-[#ABC4FF80]  bg-gradient-to-r from-[#18134D] to-[#1B1659E5] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Select a Token</h3>
          </div>
          <div className="my-2 mt-4 rounded-md bg-[#0A090D] p-4 text-sm text-[#ABC4FFB2]/70">
            This website-hosted user interface this Interface is an open source
            frontend software portal to the Raydium protocol, a decentralized
            and community-driven collection of blockchain- enabled smart
            contracts and tools the Raydium Protocol. This Interface and the
            Raydium Protocol are made available by the Raydium Holding
            Foundation, however all transactions conducted on the protocol are
            run by related permissionless smart contracts. As the Interface is
            open-sourced and the Raydium Protocol and its related smart
            contracts are accessible by any user, entity or third party, there
            are a number of third party web and mobile user- interfaces that
            allow for interaction with the Raydium Protocol.
            <br />
            <br />
            THIS INTERFACE AND THE RAYDIUM PROTOCOL ARE PROVIDED AS IS,
            <br />
            <br />
            AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Raydium
            Holding Foundation does not provide, own, or control the Raydium
            Protocol or any transactions conducted on the protocol or via
            related smart contracts. By using or accessing this Interface or the
            Raydium Protocol and related smart contracts, you agree
          </div>
          <div className=" my-5 ml-1 flex gap-4">
            <input
              type="checkbox"
              style={{ accentColor: '#ABC4FF' }}
              name=""
              id=""
              className=" "
            />
            <div className="text-sm text-white">
              I have read, understand and accept these terms.
            </div>
          </div>
          <PrimaryBtn className=" w-full">Agree and Continue</PrimaryBtn>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
