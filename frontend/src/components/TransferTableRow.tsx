import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";

const TransferTableRow = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">Arpesh</TableCell>
      <TableCell className="font-medium">Gadekar</TableCell>
      <TableCell className="font-medium">arpesh@gmail.com</TableCell>
      <TableCell className="font-medium">₹ 1,000</TableCell>
      <TableCell className="text-right">
        <Button>Send Money</Button>
      </TableCell>
    </TableRow>
  );
};

export default TransferTableRow;
