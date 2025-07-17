# Mobility Monitor

The website of the lockdown monitor: [https://www.covid-19-mobility.org/](https://www.covid-19-mobility.org/) used during covid to communicate changes in movement pattern to the public and state officials.
The team "Research on Complex Systems" around Prof. Dirk Brockmann (now Director of "Center Synergy of Systems (SynoSys)") received aggregated and anonymized mobility data from mobile phone providers and displayed the change wrt. 2019.
Later also the contact measures based on GPS locations processed by [NET CHECK](https://nc-group.net/net-check/) were added to the website as an interactive "contact-monitor"

## To RUN locally: 
first use the correct hugo version "0.84.1"
1. run `hugo`
2. run `hugo serve` to open the website locally

## Developer notes:

* HUGO_VERSION = "0.84.1"
    * recommend to use [hvm](https://github.com/jmooring/hvm) to manage multiple hugo versions
* based on wowchemy-template [starter-hugo-academic](https://github.com/wowchemy/starter-hugo-academic) from [https://wowchemy.com/](https://wowchemy.com/)
    * check the docs for questions
* [lockdown-monitor/assets/scss/custom.scss](.lockdown-monitor/assets/scss/custom.scss) modifies the classes of the css template from wowchemy
    * any costumization should go in here

## Current Deployment (probably deprecated procedure)

1. run `hugo`
2. copy everything from folder [public](./public) to the SFTP-Server
3. check the website

