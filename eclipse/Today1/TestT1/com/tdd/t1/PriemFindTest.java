package com.tdd.t1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PriemFindTest {
	PriemFind primeobj;

	@BeforeEach
	void setUp() throws Exception {
		primeobj=new PriemFind();
	}
	List<Integer> Afactor(int...number){
	List<Integer> PFactor = new ArrayList<>();
	for(int n:number)
		PFactor.add(n);
		
	return PFactor;
	}

	@Test
	void testGetFactor() {
		assertEquals(null,primeobj.getFactor(1));
	}
	@Test
	void testGetFactor01() {
		assertEquals(Afactor(2),primeobj.getFactor(2));
	}
	@Test
	void testGetFactor02() {
		assertEquals(Afactor(3),primeobj.getFactor(3));
	}
	@Test
	void testGetFactor03() {
		assertEquals(Afactor(2,2),primeobj.getFactor(4));
	}
	@Test
	void testGetFactor04() {
		assertEquals(Afactor(3,3),primeobj.getFactor(9));
	}


}
