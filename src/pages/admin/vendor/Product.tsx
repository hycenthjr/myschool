import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Product = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Product listing, editing, and inventory management would be
            displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
