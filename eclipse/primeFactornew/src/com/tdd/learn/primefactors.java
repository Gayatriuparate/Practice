package com.tdd.learn;

import java.util.ArrayList;
import java.util.List;

public class primefactors implements FindFactors {

	@Override
	public List<Integer> getFactors(int nummber) {
		// TODO Auto-generated method stub
		ArrayList<Integer> pFactor = new ArrayList<Integer>();
		int Factor=2;

		// for check 1 2 3


		if (nummber == 1)
			return null;

		if (nummber == 3) {
			pFactor.add(3);
			return pFactor;
		}
		
		while (nummber>1) {
			if(nummber%Factor==0)
			{
			pFactor.add(Factor);
			nummber=nummber/Factor;
			}
			//nummber = nummber / 2;
			else
				
			Factor++;
		}
		return pFactor;

	}

}
