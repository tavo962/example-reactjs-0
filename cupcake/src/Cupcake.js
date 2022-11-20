import { useEffect, useRef, useState, } from 'react';
import './Cupcake.css';

// const Cupcake = ( props ) => {
const Cupcake = ( { color, flavor, image, } ) => {
	// console.log( props );

	const [ estado, setEstado ] = useState( { "vendido": false, "count": 0 } );
	const [ count, setCount ] = useState( 0 );
	const fotoCupcake = useRef();
	
	const vender = () => {
		setEstado( { "vendido": true } );
		console.log( count )
		setCount( count + 1 )
		// alert( "Yeah!!" );
	}	// end function
	
	useEffect( () => {
		// console.log( "Estamos iniciando el comando ", Date.now() );
		document.title = `You clicked ${count} times`;
		// const img = fotoCupcake.current;
		// console.log( img );
		// img.classList.add( "vendido" );

		if( estado.vendido ) {
			const img = fotoCupcake.current;
			console.log( img );
			img.classList.add( "vendido" );
		}	// end if
	}, [ estado ] );
	// }, [] );

	return (
		<div className="cupcake">
			<h2>---------</h2>
			<img ref={fotoCupcake} src={image} alt={flavor} />
			<p>Color: {color}</p>
			<p>{`Sabor: ${flavor}`}</p>
			<p><strong>Estado: </strong>
				{
					estado.vendido ? "Vendido" : "A la venta"
				}
			</p>
			{
				// ! estado.vendido && <button onClick={vender}>Comprar</button>
				<button onClick={vender}>Comprar</button>
			}
			<hr />
		</div>
	);
}	// end function

export default Cupcake