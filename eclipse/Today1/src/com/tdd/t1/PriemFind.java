package com.tdd.t1;

import java.util.ArrayList;
import java.util.List;

public class PriemFind implements PrimeInter {

	@Override
	public List<Integer> getFactor(int num) {
		List<Integer> PFactor = new ArrayList<>();
		// TODO Auto-generated method stub
		int fact=2;
		if(num==1)
		
		return null;
		else
		{
			if(num%fact==0)
			{
			PFactor.add(fact);
			num=num/fact;
			}else
				fact++;
				while(num>1){
					PFactor.add(num);
					}
				
				return PFactor;
		
		}
	

}
}