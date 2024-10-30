import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ProductImage {
  url: string;
}

interface ProductProps {
  product: {
    product_images: ProductImage[];
    product_price: number;
    product_slug: string;
    product_name: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="card glass w-96">
      <figure>
        <Image
          src={product?.product_images[0]?.url || '/images/products/product-1.jpeg'}
          alt="Product image"
          width={384} // Adjust width to fit the card size
          height={216} // Adjust height to fit the card size
          className="object-cover rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_name}</h2>
        <p>{`$${product.product_price.toFixed(2)}`}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product.product_slug}`}>
            <button className="btn btn-primary">Feature</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
