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

export function SelectToken({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className=" rounded-3xl  p-0 ">
        <div className=" boxshadow h-full w-full rounded-3xl border border-[#ABC4FF80]  bg-gradient-to-r from-[#18134D] to-[#1B1659E5] p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Select a Token</h3>
            <AlertDialogCancel className="rounded-full  border-none bg-transparent  bg-gradient-to-r from-[#18134D] to-[#1B1659E5] ">
              <Image
                src={'/close.svg'}
                alt="info"
                width={50}
                height={50}
                className="h-4 w-4"
              />
            </AlertDialogCancel>
          </div>
          <div className="">
            <input
              className=" mt-4 w-full rounded-xl bg-[#1C0039]/50  bg-right bg-no-repeat p-4   text-white "
              placeholder="Search name or mint address"
            />
          </div>
          <div className="mt-4  text-white">
            <p>Popular Tokens</p>
            <div className="mt-4 flex w-fit items-center space-x-4 ">
              <div className="flex gap-2 rounded-3xl border border-border p-2 px-3 ">
                <Image
                  src={'/solana.png'}
                  alt="solana"
                  width={50}
                  height={50}
                  className="h-6 w-6"
                />
                <p>SOL</p>
              </div>
              <div className="flex gap-2 rounded-3xl border border-border p-2 px-3 ">
                <Image
                  src={'/solana.png'}
                  alt="solana"
                  width={50}
                  height={50}
                  className="h-6 w-6"
                />
                <p>SOL</p>
              </div>
              <div className="flex gap-2 rounded-3xl border border-border p-2 px-3 ">
                <Image
                  src={'/solana.png'}
                  alt="solana"
                  width={50}
                  height={50}
                  className="h-6 w-6"
                />
                <p>SOL</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between px-2 font-medium text-[#A7A7A7]">
              <p>Token</p>
              <p>Balance/Address</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className=" mt-2 flex cursor-pointer flex-row items-center justify-between rounded-md p-2 hover:bg-[#1C0039]/50 lg:px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={'/solana.png'}
                    alt="solana"
                    width={50}
                    height={50}
                    className="h-6 w-6"
                  />
                  <div className="flex flex-col">
                    <p className="text-base text-white ">SOL</p>

                    <p className="text-sm font-extralight text-white">Solana</p>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <div className=" border-2 border-border p-1 px-6 text-[#A7A7A7]">
                    abcswhejej1233444
                  </div>
                  <Image
                    src={'/share.svg'}
                    alt="copy"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <div className=" mt-2 flex cursor-pointer flex-row items-center justify-between rounded-md p-2 hover:bg-[#1C0039]/50 lg:px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={'/solana.png'}
                    alt="solana"
                    width={50}
                    height={50}
                    className="h-6 w-6"
                  />
                  <div className="flex flex-col">
                    <p className="text-base text-white ">SOL</p>

                    <p className="text-sm font-extralight text-white">Solana</p>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <div className=" border-2 border-border p-1 px-6 text-[#A7A7A7]">
                    abcswhejej1233444
                  </div>
                  <Image
                    src={'/share.svg'}
                    alt="copy"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <div className=" mt-2 flex cursor-pointer flex-row items-center justify-between rounded-md p-2 hover:bg-[#1C0039]/50 lg:px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={'/solana.png'}
                    alt="solana"
                    width={50}
                    height={50}
                    className="h-6 w-6"
                  />
                  <div className="flex flex-col">
                    <p className="text-base text-white ">SOL</p>

                    <p className="text-sm font-extralight text-white">Solana</p>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <div className=" border-2 border-border p-1 px-6 text-[#A7A7A7]">
                    abcswhejej1233444
                  </div>
                  <Image
                    src={'/share.svg'}
                    alt="copy"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <div className=" mt-2 flex cursor-pointer flex-row items-center justify-between rounded-md p-2 hover:bg-[#1C0039]/50 lg:px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={'/solana.png'}
                    alt="solana"
                    width={50}
                    height={50}
                    className="h-6 w-6"
                  />
                  <div className="flex flex-col">
                    <p className="text-base text-white ">SOL</p>

                    <p className="text-sm font-extralight text-white">Solana</p>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <div className=" border-2 border-border p-1 px-6 text-[#A7A7A7]">
                    abcswhejej1233444
                  </div>
                  <Image
                    src={'/share.svg'}
                    alt="copy"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className=" mt-4 border border-[#ABC4FF80] " />
          <div className="mt-4 flex justify-center">
            <Link className=" pb-2 text-white underline" href="#">
              {' '}
              View Token List
            </Link>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
