import React from 'react'

export default function Product() {
  return (
    <div className='flex justify-around flex-wrap'>
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://th.bing.com/th/id/OIP.jPe9vM9YTMXa-j6l1geNlwHaGk?w=214&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="mobiles" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Samsung</h2>
            <p> Offers a wide range of innovative smartphones, from budget to premium Galaxy devices.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://th.bing.com/th/id/OIP.vaIQKuCKuLStEiFxEXehZwHaHa?w=223&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="mobiles" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Infinix</h2>
            <p>Budget-friendly brand known for stylish phones with strong battery life.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://th.bing.com/th/id/OIP.JYriuVLeEpcTNpGjWFTFBwHaHa?w=189&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="mobiles" />
        </figure>
        <div className="card-body ">
            <h2 className="card-title">Apple</h2>
            <p>Premium smartphones with powerful performance and a seamless iOS experience.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://adminapi.applegadgetsbd.com/storage/media/large/Vivo-x100-Asteroid-Black-7065.jpg"
            alt="mobiles" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Vivo</h2>
            <p>Focuses on camera-centric phones with sleek design and modern features.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}
