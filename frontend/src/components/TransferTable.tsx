import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import TransferTableRow from "./TransferTableRow";

const TransferTable = () => {
  return (
    <Table className="w-full border-t">
      <TableHeader>
        <TableRow>
          <TableHead className="">First Name</TableHead>
          <TableHead className="">Last Name</TableHead>
          <TableHead className="">Email</TableHead>
          <TableHead className="">Balance</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TransferTableRow />
        <TransferTableRow />
        <TransferTableRow />
      </TableBody>
    </Table>
  );
};

export default TransferTable;
