# Migration from W5200 to W5500

This page explains migration materials to W5200 users.

-----

### Driver for W5200 Users

  - Download :
    ![w5500\_cortexm3\_firmware\_for\_legacy.zip](/products/w5500/w5500_cortexm3_firmware_for_legacy.zip)
  

This driver is provided only for current W5200 users to help with a fast
migration to W5500. TTo **get the new or latest BSD version driver**,
please refer to the [W5500 Driver](w5500_driver.md) page.


### W5500 vs W5200 Chip in Comparison

|Device|W5500|W5200|
|------|-----|-----|
|Process|0.13um|0.18um|
|Package|48 LQFP (7*7 mm^2)|48 QFN (7*7 mm^2)|
|IO Voltage / Core Voltage|3.3V / 1.2V|3.3V / 1.8V|
|Number of sockets|8 ea|8 ea|
|SPI Frame|ADD1/ADD2/Control/Data0/Data1|ADD1/ADD0/OP+LEN1/LEN0/Data…|
| |8bit/8bit/8bit/8bit/8bit|8bit/8bit/1bit +7bit /8bit /8bit|
||Control 1 byte (Block selection, Read/Write selection, SPI mode selection)|OP Code 1 bit (Read/Write Selection)|
| |No Data Length |field|Data Length 15bit|
|Memory Access|TX Memory and RX Memory can be used for general data memory.|TX Memory can be used for general data memory.|
|MCU Bus Interface|SPI|SPI / 8bit parallel indirect bus mode|
|Regulator Related Circuit|LDO output pin needs the capacitor. No need to supply the chip power (1.2V).|LDO output voltage (1.8V) must be applied to the chip power (1.8V) at the outer side of the chip package.|
|PHY Power Down Setting|PHY's power down mode can be set by configuring PHY Register.|PHY's power down mode can be set by external pin.|
|WOL Function|WOL over UDP Support|WOL over Ethernet Support|
|PHY Mode Setting|PHY mode can be set by Firmware||
|Status LED|4 LEDs (SPD / DUP / ACT / Link)|3 LEDs (SPD / DUP / Link)|
|PHY Auto MDIX Function|No Support|Support|
|Operating Current @100Mbps Full Link|Typical 132mA|Typical 160mA|
