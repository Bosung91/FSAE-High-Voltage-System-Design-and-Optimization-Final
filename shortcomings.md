---
layout: default
title: Shortcomings
---

# Shortcomings

## ESF Model Accuracy
<p style='text-align: justify'>
The ESF model underestimates actual power dissipation by approximately 99.3%. While the actual power remains within the resistor's rating, the significant discrepancy limits the ESF's usefulness as a predictive tool for design validation. A more representative model accounting for Inverter loading and parasitic impedances would improve accuracy.
</p>

## Precharge Resistor Temperature Monitoring
<p style='text-align: justify'>
Temperature monitoring during the resistor iteration test relied on a single thermistor in direct contact with the resistor. No temperature sensor was installed in R25Evo during test runs, meaning the original failure diagnosis was based on engineering judgement. Data logging of Precharge resistor temperature must be implemented for R26E to ensure the proposed solution is effective under sustained operation.
</p>

## SPICE Simulation Validation
<p style='text-align: justify'>
Altium Designer SPICE simulation was used for the first time during this project. The simulation predicted an average power of 10.8W, while the actual measured value was 16.62W. Critically, the SPICE simulation was conducted using the 1.5kΩ resistor configuration (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#d' target='_blank'>Appendix D</a>), not the 3.3kΩ resistor selected for R26E. The predicted 10.8W and actual 16.62W are therefore not directly comparable as they correspond to different resistor values and circuit configurations. The simulation must be re-run with the 3.3kΩ resistor to establish a valid baseline for future design validation.
</p>

---
[Previous Section: HV Distribution PCB](hv-distribution-testing.md)

[Next Section: Future Work](future-work.md)

[List of Abbreviations](list-of-abbrev.md)
