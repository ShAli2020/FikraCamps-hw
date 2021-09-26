function CheckOverlap(t1Start, t1End, t2Start, t2Start) {
     overlap = t1Start < t2Start && t2Start < t1End;
   if (overlap ==true)
   return'Not OVERLAP'
   else
    return'overlap'

}
console.log(
  CheckOverlap(
    "13/5/2021 13:00",
    "14/5/2021 13:00",
    "14/5/2021 13:00",
    "16/5/2021 13:00"
  )
);