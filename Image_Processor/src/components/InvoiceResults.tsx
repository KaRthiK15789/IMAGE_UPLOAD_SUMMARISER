import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { DollarSign, FileText, Calendar, Building } from 'lucide-react';
import { type InvoiceResponse } from '@/services/aiService';

interface InvoiceResultsProps {
  result: InvoiceResponse;
}

const InvoiceResults: React.FC<InvoiceResultsProps> = ({ result }) => {
  return (
    <div className="space-y-6" data-id="2voc3es43" data-path="src/components/InvoiceResults.tsx">
      {/* Header */}
      <Card data-id="4dp1sjrdq" data-path="src/components/InvoiceResults.tsx">
        <CardHeader data-id="pflr44747" data-path="src/components/InvoiceResults.tsx">
          <div className="flex items-center justify-between" data-id="hxutmrg62" data-path="src/components/InvoiceResults.tsx">
            <CardTitle className="text-xl" data-id="o53th0n8q" data-path="src/components/InvoiceResults.tsx">Invoice Analysis</CardTitle>
            <Badge variant="secondary" data-id="4xwg8in17" data-path="src/components/InvoiceResults.tsx">Processed</Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Summary */}
      <Card data-id="9z1ylndcw" data-path="src/components/InvoiceResults.tsx">
        <CardHeader data-id="z30gi56mh" data-path="src/components/InvoiceResults.tsx">
          <CardTitle className="text-lg flex items-center" data-id="sl89y1txw" data-path="src/components/InvoiceResults.tsx">
            <FileText className="h-5 w-5 mr-2" data-id="ik3iikyl2" data-path="src/components/InvoiceResults.tsx" />
            Invoice Summary
          </CardTitle>
        </CardHeader>
        <CardContent data-id="2xns4al2r" data-path="src/components/InvoiceResults.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="x7sb7lmgo" data-path="src/components/InvoiceResults.tsx">
            <div className="flex items-center space-x-3" data-id="i0rvmjqiu" data-path="src/components/InvoiceResults.tsx">
              <div className="p-2 bg-green-100 rounded-lg" data-id="2c0fasgqa" data-path="src/components/InvoiceResults.tsx">
                <DollarSign className="h-5 w-5 text-green-600" data-id="0adr390us" data-path="src/components/InvoiceResults.tsx" />
              </div>
              <div data-id="okoawgr4b" data-path="src/components/InvoiceResults.tsx">
                <p className="text-sm text-gray-600" data-id="gysjdn7uz" data-path="src/components/InvoiceResults.tsx">Total Amount</p>
                <p className="text-lg font-semibold" data-id="qy9pcpsfg" data-path="src/components/InvoiceResults.tsx">{result.summary.totalAmount}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3" data-id="ghls10z6l" data-path="src/components/InvoiceResults.tsx">
              <div className="p-2 bg-blue-100 rounded-lg" data-id="i77yewpy6" data-path="src/components/InvoiceResults.tsx">
                <Calendar className="h-5 w-5 text-blue-600" data-id="80ltf9f6j" data-path="src/components/InvoiceResults.tsx" />
              </div>
              <div data-id="ixv0qufpf" data-path="src/components/InvoiceResults.tsx">
                <p className="text-sm text-gray-600" data-id="u61v70qsu" data-path="src/components/InvoiceResults.tsx">Date</p>
                <p className="text-lg font-semibold" data-id="4xleonwsn" data-path="src/components/InvoiceResults.tsx">{result.summary.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3" data-id="2kcbk6534" data-path="src/components/InvoiceResults.tsx">
              <div className="p-2 bg-purple-100 rounded-lg" data-id="qkwbu1jes" data-path="src/components/InvoiceResults.tsx">
                <FileText className="h-5 w-5 text-purple-600" data-id="fw52os1oy" data-path="src/components/InvoiceResults.tsx" />
              </div>
              <div data-id="ni5wjn5tt" data-path="src/components/InvoiceResults.tsx">
                <p className="text-sm text-gray-600" data-id="e4yt3ztlg" data-path="src/components/InvoiceResults.tsx">Invoice #</p>
                <p className="text-lg font-semibold" data-id="zb59bbrio" data-path="src/components/InvoiceResults.tsx">{result.summary.invoiceNumber}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3" data-id="sgsuncfmf" data-path="src/components/InvoiceResults.tsx">
              <div className="p-2 bg-orange-100 rounded-lg" data-id="9k0eqnx5b" data-path="src/components/InvoiceResults.tsx">
                <Building className="h-5 w-5 text-orange-600" data-id="ajs2abe7l" data-path="src/components/InvoiceResults.tsx" />
              </div>
              <div data-id="1zw7huirv" data-path="src/components/InvoiceResults.tsx">
                <p className="text-sm text-gray-600" data-id="tm70lt7jl" data-path="src/components/InvoiceResults.tsx">Currency</p>
                <p className="text-lg font-semibold" data-id="frbr0flva" data-path="src/components/InvoiceResults.tsx">{result.summary.currency}</p>
              </div>
            </div>
          </div>

          <Separator className="my-4" data-id="sejws1chi" data-path="src/components/InvoiceResults.tsx" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="bvhqv416t" data-path="src/components/InvoiceResults.tsx">
            <div data-id="phz124pf1" data-path="src/components/InvoiceResults.tsx">
              <h4 className="font-semibold text-sm text-gray-600 mb-2" data-id="n5vz67jxm" data-path="src/components/InvoiceResults.tsx">Vendor</h4>
              <p className="text-base" data-id="la1d1lohk" data-path="src/components/InvoiceResults.tsx">{result.summary.vendor}</p>
            </div>
            <div data-id="kgtwdff5k" data-path="src/components/InvoiceResults.tsx">
              <h4 className="font-semibold text-sm text-gray-600 mb-2" data-id="31g2e8ywq" data-path="src/components/InvoiceResults.tsx">Customer</h4>
              <p className="text-base" data-id="2pbq6js0a" data-path="src/components/InvoiceResults.tsx">{result.summary.customer}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Items Table */}
      <Card data-id="l2q5608u5" data-path="src/components/InvoiceResults.tsx">
        <CardHeader data-id="g46onxq7j" data-path="src/components/InvoiceResults.tsx">
          <CardTitle className="text-lg" data-id="737b7jt35" data-path="src/components/InvoiceResults.tsx">Invoice Items</CardTitle>
        </CardHeader>
        <CardContent data-id="9tpm9vziy" data-path="src/components/InvoiceResults.tsx">
          <div className="overflow-x-auto" data-id="q5rydrbif" data-path="src/components/InvoiceResults.tsx">
            <Table data-id="70xs36cok" data-path="src/components/InvoiceResults.tsx">
              <TableHeader data-id="vzy3wz2dd" data-path="src/components/InvoiceResults.tsx">
                <TableRow data-id="xph7f8t38" data-path="src/components/InvoiceResults.tsx">
                  <TableHead data-id="v5ewyt92x" data-path="src/components/InvoiceResults.tsx">Description</TableHead>
                  <TableHead className="text-center" data-id="5b74wcklv" data-path="src/components/InvoiceResults.tsx">Qty</TableHead>
                  <TableHead className="text-right" data-id="ynx64t9g8" data-path="src/components/InvoiceResults.tsx">Unit Price</TableHead>
                  <TableHead className="text-right" data-id="91r7hbvu7" data-path="src/components/InvoiceResults.tsx">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody data-id="fh7h97gzk" data-path="src/components/InvoiceResults.tsx">
                {result.items.map((item, index) =>
                <TableRow key={index} data-id="hajv2fsa4" data-path="src/components/InvoiceResults.tsx">
                    <TableCell className="font-medium" data-id="nzolti23y" data-path="src/components/InvoiceResults.tsx">{item.description}</TableCell>
                    <TableCell className="text-center" data-id="zm10eud0m" data-path="src/components/InvoiceResults.tsx">{item.quantity}</TableCell>
                    <TableCell className="text-right" data-id="5j1wg6ffk" data-path="src/components/InvoiceResults.tsx">{item.unitPrice}</TableCell>
                    <TableCell className="text-right font-semibold" data-id="p4jxhrnb2" data-path="src/components/InvoiceResults.tsx">{item.total}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <Separator className="my-4" data-id="0vx468z7d" data-path="src/components/InvoiceResults.tsx" />
          
          <div className="flex justify-end" data-id="2fdfn89be" data-path="src/components/InvoiceResults.tsx">
            <div className="text-right" data-id="uupsix0vn" data-path="src/components/InvoiceResults.tsx">
              <p className="text-lg font-semibold" data-id="3coszkfcv" data-path="src/components/InvoiceResults.tsx">
                Total: {result.summary.totalAmount}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card data-id="xga05ikyj" data-path="src/components/InvoiceResults.tsx">
        <CardHeader data-id="h3l0x3qqa" data-path="src/components/InvoiceResults.tsx">
          <CardTitle className="text-lg" data-id="i6z57p5um" data-path="src/components/InvoiceResults.tsx">AI Insights</CardTitle>
        </CardHeader>
        <CardContent data-id="ai0r3pruz" data-path="src/components/InvoiceResults.tsx">
          <div className="space-y-3" data-id="luttlbrg1" data-path="src/components/InvoiceResults.tsx">
            {result.insights.map((insight, index) =>
            <div key={index} className="flex items-start space-x-3" data-id="duexor3qr" data-path="src/components/InvoiceResults.tsx">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" data-id="xtbjedj9w" data-path="src/components/InvoiceResults.tsx" />
                <p className="text-sm text-gray-700" data-id="zptlt6iac" data-path="src/components/InvoiceResults.tsx">{insight}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>);

};

export default InvoiceResults;