// Generical piece module
// Each object has a pos property

const Piece = function(index, sizeX, sizeY, state) {
    this.i = Math.floor(index / sizeY);
    this.j = index % sizeX;
    this.state = state;
	/*
	 * table: lists of Piece objects
	 * range: range of neighbors from this object (e.g. range = 1 means only the adjacent neighbors)
	 * */
	// All neighbors inside a given range
    this.findAllNeig = (table, range) => {
		let neighbors = [];
        for (let j = Math.max(0, this.j - range); j <= Math.min(sizeX - 1, this.j + range); j++) {
            for (let i = Math.max(0, this.i - range); i <= Math.min(sizeY - 1, this.i + range); i++) {
				// Skips when reaches itself
                if (j === this.j && i === this.i) continue;
				neighbors.push(table[j + i * sizeX]);
            }
        }
		return neighbors;
    }
	// All ortogonal neighbors inside a given range
    this.findOrtoNeig = (table, range) => {
		let neighbors = [];
        for (let j = Math.max(0, this.j - range); j <= Math.min(sizeX - 1, this.j + range); j++) {
            for (let i = Math.max(0, this.i - range); i <= Math.min(sizeY - 1, this.i + range); i++) {
				// Skips when reaches itself
                if (j === this.j && i === this.i) continue;
				// Skips if the neighbor is not ortogonal to this object
				else if (this.i != i && this.j != j) continue;
				neighbors.push(table[j + i * sizeX]);
            }
        }
		return neighbors;
    }
	// All neighbors above the object inside a given range
	this.findUpNeig = (table, range) => {
		let neighbors = [];
		// If the object is on the first line, there is no upside neighbors
		if (!this.i) return neighbors;
		else {
			for (let i = Math.max(0, this.i - range); i < this.i; i++) {
				neighbors.push(table[this.j + i * sizeX]);
			}
		}

	}
	// Test and do the other ortogonal directions
	// Diagonal quadrant nº 1
	this.findD1Neig = (table, range) => {
		let neighbors = [];
		// If the object is on the first line or on the last column
		if (!this.i || this.j === (sizeX - 1)) return neighbors;
		else {
			//const numbOfNeig = Math.min(this.i, );
			//for (let n = 1; n < Math.	
		}
	}
	
}

const Table = function(sizeX, sizeY, emptyState) {
    //this.table = [];
	let table = [];
	for (let i = 0; i < sizeX * sizeY; i++) {
		table.push(new Piece(i, sizeX, sizeY, emptyState))		
	}
	return table;
}

// It works this way
module.exports = {
    "pieceObj": Piece,
	"tableList": Table
}
