package com.tdd.learn5;

import java.util.ArrayList;
import java.util.List;

public class Primeclass implements PrimeInter {

	@Override
	public List<Integer> getFactors(int num) {
		List<Integer>factlist=new ArrayList<>();
		{
			
		// TODO Auto-generated method stub
		if(num==1) {
			return null;
		}
	else
		{
		int fact=2;
		while(num>=fact)
		{
		if(num%fact==0)
		{
			factlist.add(fact);
			num/=fact;
		}
		else {
			fact++;
			
		}
		}return factlist;
		

	}
}}}
