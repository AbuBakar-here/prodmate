import axios from 'axios'
import cheerio from 'cheerio'


export const preprocessResponse = (apiResponse) => {
    const data = {}
    let tmp = apiResponse.split("\n\n")

    // preprocessing productDetails
    if (tmp[0].split("\n- ").length > 2){
        data.productDetails = tmp[0].split("\n- ")  // .replace("Description: ", "").replace("Description:", "")
    } else {
        data.productDetails = tmp[0].split("\n-")  // .replace("Description: ", "").replace("Description:", "")
    }
    data.productDetails.shift()
    data.productDetails = data.productDetails.map(x => "<li>" + x + "</li>").join("\n")
    data.productDetails = "<ul>\n" + data.productDetails + "\n</ul>"

    // preprocessing productPrice
    data.productPrice = tmp[1].replace("Price:\n- ", "").replace("Price: \n- ", "").replace("Price: ", "").replace("Approximately ", "").replace(".", "").replace(" (Estimated)", "")
    // data.productPrice = data.productPrice.slice(0, data.productPrice - 1)

    // preprocessing productCategory
    data.productCategory = tmp[2].replace("Category:\n- ", "").replace("Category: \n- ", "").replace("Category: ", "").replace(".", "")
    // data.productCategory = data.productCategory.slice(0, data.productCategory - 1)

    // all done
    return data
}

export const fetchImages = async (productName) => {
    try {
        const url = "https://www.amazon.com/s?k=" + encodeURI(productName) // .split(" ").join("+").toLowerCase()
        const response = await axios.get(url)
        const $ = cheerio.load(response.data);
        let imgSrc = $('div.sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16').find('img.s-image').attr('src')
        return imgSrc
    } catch (error) {
        throw error;
    }
}


// export preprocessResponse
// export fetchImages