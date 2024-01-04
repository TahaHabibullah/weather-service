export function translateTime(time) {
    const temp = time.substring(time.indexOf('T')+1, time.indexOf('T')+3)
    const hour = parseInt(temp)
    let res = ""
    if(hour <= 0)
        res = "12 AM"
    else if(hour < 12)
        res = hour + " AM"
    else if(hour > 12)
        res = (hour-12) + " PM"
    else if(hour == 12)
        res = "12 PM"
    return res
}

export function precipitationWrapper(chance) {
    if(chance == null)
        return 0;
    else
        return chance
}

export function getIcon(forecast, time) {
    if(!time.includes("Night")) {
        if(forecast.includes("Sunny")) {
            if(forecast.includes("Partly") || forecast.includes("Mostly") || forecast.includes("A Few Clouds")) {
                if(forecast.includes("Rain") && forecast.includes("Snow")) {
                    return "pe-7w-hail-sun"
                }
                else if(forecast.includes("Rain")) {
                    if(forecast.includes("Windy"))
                        return "pe-7w-rain-alt-sun"
                    else
                        return "pe-7w-rain-sun"
                }
                else if(forecast.includes("Snow")) {
                    if(forecast.includes("Windy"))
                        return "pe-7w-snow-alt-sun"
                    else
                        return "pe-7w-snow-sun"
                }
                else {
                    if(forecast.includes("Windy"))
                        return "pe-7w-cloud-wind-sun"
                    else
                        return "pe-7w-cloud-sun"
                }
            }
            else {
                return "pe-7w-sun"
            }
        }
        else if(forecast.includes("Cloudy")) {
            if(forecast.includes("Rain") && forecast.includes("Snow")) {
                return "pe-7w-hail"
            }
            else if(forecast.includes("Rain")) {
                if(forecast.includes("Windy"))
                    return "pe-7w-rain-alt"
                else
                    return "pe-7w-rain"
            }
            else if(forecast.includes("Snow")) {
                if(forecast.includes("Windy"))
                    return "pe-7w-snow-alt"
                else
                    return "pe-7w-snow"
            }
            else {
                if(forecast.includes("Windy"))
                    return "pe-7w-cloud-wind"
                else if(forecast.includes("Partly"))
                    return "pe-7w-cloud-sun"
                else
                    return "pe-7w-cloud"
            }
        }
        else if(forecast.includes("Rain") && forecast.includes("Snow")) {
            return "pe-7w-hail"
        }
        else if(forecast.includes("Rain")) {
            if(forecast.includes("Light")) {
                if(forecast.includes("Windy"))
                    return "pe-7w-drizzle-alt"
                else
                    return "pe-7w-drizzle"
            }
            else {
                if(forecast.includes("Windy"))
                    return "pe-7w-rain-alt"
                else
                    return "pe-7w-rain"
            }
            
        }
        else if(forecast.includes("Snow")) {
            if(forecast.includes("Windy"))
                return "pe-7w-snow-alt"
            else
                return "pe-7w-snow"
        }
        else if(forecast.includes("Windy")) {
            return "pe-7w-wind-sun"
        }
        else if(forecast.includes("Thunderstorm")) {
            if(forecast.includes("Rain") || forecast.includes("Showers"))
                return "pe-7w-lightning-rain"
            else
                return "pe-7w-lightning"
        }
        else if(forecast.includes("Showers")) {
            if(forecast.includes("Windy"))
                return "pe-7w-rain-alt"
            else
                return "pe-7w-rain"
        }
    }
    else {
        if(forecast.includes("Clear")) {
            if(forecast.includes("Partly") || forecast.includes("A Few Clouds")) {
                if(forecast.includes("Rain") && forecast.includes("Snow")) {
                    return "pe-7w-hail-moon"
                }
                else if(forecast.includes("Rain")) {
                    if(forecast.includes("Windy"))
                        return "pe-7w-rain-alt-moon"
                    else
                        return "pe-7w-rain-moon"
                }
                else if(forecast.includes("Snow")) {
                    if(forecast.includes("Windy"))
                        return "pe-7w-snow-alt-moon"
                    else
                        return "pe-7w-snow-moon"
                }
                else {
                    if(forecast.includes("Windy"))
                        return "pe-7w-cloud-wind-moon"
                    else
                        return "pe-7w-cloud-moon"
                }
            }
            else {
                return "pe-7w-moon"
            }
        }
        else if(forecast.includes("Cloudy")) {
            if(forecast.includes("Rain") && forecast.includes("Snow")) {
                return "pe-7w-hail"
            }
            else if(forecast.includes("Rain")) {
                if(forecast.includes("Windy"))
                    return "pe-7w-rain-alt"
                else
                    return "pe-7w-rain"
            }
            else if(forecast.includes("Snow")) {
                if(forecast.includes("Windy"))
                    return "pe-7w-snow-alt"
                else
                    return "pe-7w-snow"
            }
            else {
                if(forecast.includes("Windy"))
                    return "pe-7w-cloud-wind"
                else if(forecast.includes("Partly"))
                    return "pe-7w-cloud-moon"
                else
                    return "pe-7w-cloud"
            }
        }
        else if(forecast.includes("Rain") && forecast.includes("Snow")) {
            return "pe-7w-hail"
        }
        else if(forecast.includes("Rain")) {
            if(forecast.includes("Windy"))
                return "pe-7w-rain-alt"
            else
                return "pe-7w-rain"
        }
        else if(forecast.includes("Snow")) {
            if(forecast.includes("Windy"))
                return "pe-7w-snow-alt"
            else
                return "pe-7w-snow"
        }
        else if(forecast.includes("Windy")) {
            return "pe-7w-wind-moon"
        }
        else if(forecast.includes("Thunderstorm")) {
            if(forecast.includes("Rain") || forecast.includes("Showers"))
                return "pe-7w-lightning-rain"
            else
                return "pe-7w-lightning"
        }
        else if(forecast.includes("Showers")) {
            if(forecast.includes("Windy"))
                return "pe-7w-rain-alt"
            else
                return "pe-7w-rain"
        }
    }
    return "pe-7w-sun"
}

export function getTempIcon(temp) {
    if(temp >= 90)
        return "pe-7w-thermometer-full"
    else if(temp >= 65)
        return "pe-7w-thermometer-3-4"
    else if(temp >= 40)
        return "pe-7w-thermometer-1-2"
    else if(temp >= 15)
        return "pe-7w-thermometer-1-4"
    else
        return "pe-7w-thermometer-0"
}