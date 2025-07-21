export function adjustedCapital(instrument) {
  if (!instrument.capital > 0) return 0;
  if (instrument.interestRate > 0 && instrument.duration > 0)
    return (
      (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
    );
}
