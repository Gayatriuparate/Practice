package com.trytdd.l1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFindTest {
	PrimeFind Primeobj;


	@BeforeEach
	void setUp() throws Exception {
		Primeobj=new PrimeFind();
	}

	@Test
	void testGetFactor() {
		assertEquals(null, Primeobj.getFactor(1));
	}

}
