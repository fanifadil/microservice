import React from "react";
import Link from "next/link";
import FormatThousand from "src/helpers/FormatThousand";

export default function RenderItem({ item }) {
  return (
    <div className='w-1/6 px-4 h-100'>
      <div className='card relative transition-all duration-300'>
        {item.imageName}
        <div className='card-meta mt-10'>
          <h4 className='text-lg transition-all duration-300 w-12'>
            {item.name}
          </h4>
          <h5 className='text-sm transition-all duration-500 mt-2'>
            {FormatThousand(item.total)}
          </h5>
          <Link href='#'>
            <a className='link-wrapped'></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
