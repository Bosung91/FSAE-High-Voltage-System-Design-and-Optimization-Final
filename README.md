<head>
    <link rel='stylesheet' href='avatar.css'>
</head>

<center><img src='./Figures/NUS_logo_full-vertical.jpg'></center>  

<center><img src='./Figures/NUS Formula SAE Logo.png'></center>  

# **CDE4301 Final Report**
## FTS-433: FSAE High Voltage System Design and Optimization
Semester 2 AY/2025/2026

<b>Submitted by</b>

<img src='./Figures/profile pic.jpg' alt='profile pic' class='avatar'>
<br>
<p>
Suh Bosung (A0258007H)
</p>

**Supervisor** Mr. Lim Hong Wee  

## Table of Contents
1. [Precharge-Discharge PCB (PCDC) Optimization](pcdc-optimization.md)
    1. [Precharge Resistor Testing Methodology](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pcdc-optimization.html#testing-methodology)
    2. [Power Dissipation Analysis (Altium SPICE vs. Actual)](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pcdc-optimization.html#power-dissipation-analysis)
    3. [Thermal Analysis](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pcdc-optimization.html#thermal-analysis)
    4. [Precharge Sequence Timing vs. FSAE Safety Requirements](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pcdc-optimization.html#precharge-sequence-timing)
    5. [Multi-Criteria Resistor Selection](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pcdc-optimization.html#resistor-selection)
2. [Tractive Battery PDM (TB PDM) Verification](tb-pdm-verification.md)
    1. [Signal Generator Criticality and Permutation Testing](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/tb-pdm-verification.html#signal-generator-testing)
    2. [Electrical Stress, Continuity, and Load Testing](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/tb-pdm-verification.html#electrical-stress-testing)
    3. [Design Verification Plan Report Amendments](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/tb-pdm-verification.html#dvp-amendments)
3. [High Voltage (HV) Distribution Stress Testing](hv-distribution-testing.md)
    1. [Fuse Ampacity vs. Branched Wire Rating Validation](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/hv-distribution-testing.html#fuse-ampacity-validation)
4. [Pre-Test Run Documentation](pre-test-documentation.md)
    1. [Installation Procedures](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pre-test-documentation.html#installation)
    2. [Wiring Architecture](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pre-test-documentation.html#wiring)
    3. [Troubleshooting Log](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/pre-test-documentation.html#troubleshooting)
5. [Final Test Run and System Integration](final-test-run.md)
    1. [PCDC Logged Data: Cascadia Bus Voltage](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/final-test-run.html#pcdc-logged-data)
    2. [TB PDM Logged Data: Signal Stability](https://bosung91.github.io/FSAE-High-Voltage-System-Design-and-Optimization/final-test-run.html#tb-pdm-logged-data)