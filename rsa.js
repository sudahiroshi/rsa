class RSA {
	constructor() {
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
	}
}
window.addEventListener('load', ()=> {
	let rsa = new RSA();
});

