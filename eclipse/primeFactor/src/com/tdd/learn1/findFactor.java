package com.tdd.learn1;

import java.util.ArrayList;
import java.util.List;

public class findFactor implements primeFactor {

	@Override
	public List<Integer> getFactors(int number) {
		ArrayList<Integer> pFactor = new ArrayList<Integer>();
		// TODO Auto-generated method stub
		//int Factor=2;

		if (number = null)
		{
			pFactor.add(1);
		}
		return pFactor;

	}

}
		

		/*if (number == 3) {
			pFactor.add(3);
		
		}
		
		
		while(number>1)
		{
			if(number%Factor==0)
			{
				pFactor.add(Factor);
				number=number/Factor;
			}
			
			else
			{
				Factor++;
			}

			
		}
		*
		*/
		
