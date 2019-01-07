package com.trytdd.l;

import java.util.ArrayList;
import java.util.List;

public class PrimeFind implements PrimeInter {

	@Override
	public List<Integer> getFactor(int num) {
		// TODO Auto-generated method stub
		List<Integer> pFactor=new ArrayList<>();
		int Fact=2;
		if(num==1) {
			return null;
		}
		else
		{
			while(num>1)
			{
			if(num%Fact==0)
			{
				
				pFactor.add(Fact);
				num=num/Fact;
			}
			else
			{
				Fact++;
			}
			}
			
		}
		
		return pFactor;
	}

}
