import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categoriessection() {

 const [categories, setCategories] = useState([])

useEffect(() => {
axios.get('https://dummyjson.com/products/categories').then(json=> setCategories(json.data))
}, [])

  return (
   <div className="container">
    <div className="my-5 text-center">
        <h1 >Categories</h1>
        <p className='text-secondary'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio inventore quas voluptas dolores quia repellat cum quae perspiciatis voluptatem, recusandae reiciendis! Doloremque culpa mollitia omnis! Sit harum reiciendis quia illo?
        </p>
    </div>
    <div className="row">
        
       {
        categories.map((val, key) => 
        <div className='col-md-4 my-3' key={key}>
        <Link className='text-decoration-none' to={`/products/category/${val}`}>
        <Card >
        <Card.Img variant="top"  src={val.thumbnail} />
        <Card.Body>
          <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
         </Card.Body>
      </Card>
        </Link>
      </div>
      )
       }
        
    </div>
   </div>


  )
}
