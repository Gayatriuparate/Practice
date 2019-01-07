package com.tdd.learn4;

import java.util.ArrayList;
import java.util.List;

public class findfactor implements primefactor {

	@Override
	public List<Integer> getFactor(int number) {
		List<Integer> pFactor = new ArrayList<Integer>();
		// TODO Auto-generated method stub
		int fact=2;
		if (number == 1)
			pFactor = null;
		while(number>1) 
			{
			if(number % fact == 0)
			{
				pFactor.add(fact);
				number /= fact;
			}
			else
			//if(number>1)
				fact++;
			}
		return pFactor;
	}
	

}