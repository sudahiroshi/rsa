class RSA {
	constructor() {
		this.prime = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
			41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
			103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157,
			163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
			227, 229, 233, 239, 241, 251 ];
		this.p = document.querySelector('#p');
		this.q = document.querySelector('#q');
		this.n = document.querySelector('#n');

		this.p.addEventListener( 'change', ()=>this.pq() );
		this.q.addEventListener( 'change', ()=>this.pq() );
	}
	pq() {
		let p = this.p.value;
		let q = this.q.value;
		if( p == "" || q == "" ) return;
		let p_value = parseInt( p, 10 );
		let q_value = parseInt( q, 10 );
		
		this.n_value = p * q;
		let textnode = document.createTextNode( this.n_value );
		this.n.appendChild( textnode );

		let lcm = this.lcm( p_value-1, q_value-1 );
		console.log( "LCM=" + lcm );
	}

	lcm( m, n ) {
		return m * n / this.gcd( this.gcd( m, n ) );
	}
	gcd( m, n ) {
		while( n>0 ) {
			let r = m%n;
			m = n;
			n = r;
		}
		return m;
	}
}
window.addEventListener('load', ()=> {
	let rsa = new RSA();
});

