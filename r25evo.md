# R25Evo
<p style='text-align: justify'>
This section discusses the issues faced in the HV system during R25Evo test runs that informed the design changes for R26E.
</p>

## Precharge Resistor Failure
<p style='text-align: justify'>
R25Evo lost drive and could not start after power cycling. Precharge resistors on the 25 Precharge-Discharge Printed Circuit Board (PCB) completely melted down as shown in <i>Figure 7</i>. Two possible causes were investigated: under-specced resistor and insufficient heat dissipation by heat sink.
</p>

<center><img src='./Figures/Burnt Precharge Resistors Top View.jpg'></center>
<center><i>Figure 7: Burnt Precharge Resistors</i></center>

<br>

<p style='text-align: justify'>
A comparison of calculated operating parameters against datasheet values confirmed that none of the electrical limits (power, temperature, current, voltage) were exceeded, indicating the resistor was specced properly for the circuit (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#a' target='_blank'>Appendix A</a> for the full parameter comparison and calculations).
</p>

<p style='text-align: justify'>
Further investigation revealed that the PCB layers (solder resist, PP-006, FR-4) between the resistors and the heat sink are thermal insulators, making the heat sink placement on the opposite surface <b>as ineffective as not placing the heat sink</b> (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#b' target='_blank'>Appendix B</a> for thermal conductivity comparison). The resistors therefore melted down due to <b><u>insufficient heat dissipation during operation.</u></b>
</p>

<center><img src='./Figures/Burnt Precharge Resistors Side View.jpg'></center>
<center><i>Figure 8: Heat Sink Position</i></center>

## PCB Board-to-Wire Connectors
<p style='text-align: justify'>
R25Evo lost power intermittently mid drive. The Precharge signal oscillated due to a <b><u>loose connection from the 25 TB Power Distribution Module (PDM) to Isolation Relay positive terminal (IR+).</u></b> The Precharge signal should be set as HIGH by the Electronic Control Unit (ECU) only when the car is starting, then be set as LOW for the rest of the run. The oscillation caused repeated precharge cycling which disrupted normal operation (refer to <a href='https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization-Final/appendix.html#c' target='_blank'>Appendix C</a> for the Precharge sequence logic and logged data).
</p>

<p style='text-align: justify'>
The following sections describe the design changes implemented to rectify the above-mentioned issues for R26E HV system, together with the testing results to validate the effectiveness of those changes.
</p>

---
[Previous Section: Context of Problem](context-of-problem.md)

[Next Section: PCDC Optimization](pcdc-optimization.md)

[List of Abbreviations](list-of-abbrev.md)
