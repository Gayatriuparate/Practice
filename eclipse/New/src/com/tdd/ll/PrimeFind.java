package com.tdd.ll;

import java.util.ArrayList;
import java.util.List;

public class PrimeFind implements PrimeInter {

	@Override
	public List<Integer> getFactor(int number) {
		List<Integer> pFactor = new ArrayList<>();
		// TODO Auto-generated method stub
	if(number==1)
		return null;
	else
		pFactor.add(2);
	return pFactor;			
	}

}
