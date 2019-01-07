package com.tdd.learn12;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactor implements pFactors {

	@Override
	public List<Integer> getFactors(int number) {
		List<Integer> pFactor = new ArrayList<Integer>();
		// TODO Auto-generated method stub
		if (number == 1)
			pFactor = null;
		else 
			{
			while (number % 2 == 0)
			{
				pFactor.add(2);
				number /= 2;
			}
			}
			if(number>1)
				pFactor.add(number);

		return pFactor;
	}

}
