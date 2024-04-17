import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function DashBoardComponent() {
  return (
    <Card className="  min-h-[600px]   w-full rounded-2xl border border-stone-500/40 bg-[#141217] px-4 pt-12 lg:px-8">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="">
            <TableRow
              style={{ color: 'white', margin: '10px' }}
              className="border"
            >
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className=" m-2  cursor-pointer rounded-2xl bg-[#260F41]/50 bg-opacity-50 p-8 px-4 py-3 text-white transition-all duration-200 hover:bg-purple-950">
              <TableCell className="my-16 rounded-l-2xl">
                <div className="font-medium">Liam Johnson</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden p-16 sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="text-muted-foreground hidden text-sm md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Refund</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Declined
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
