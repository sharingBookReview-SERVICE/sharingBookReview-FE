const titles = {
    image_1: "",
    image_2: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%80%E1%85%B1%E1%84%8B%E1%85%A7%E1%84%8B%E1%85%AE%E1%86%AB+%E1%84%92%E1%85%B4%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A1%E1%84%85%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg",
    image_3: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B3%E1%86%B7%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A9-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_4: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%82%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B3%E1%84%85%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AB+%E1%84%89%E1%85%A9%E1%84%85%E1%85%A1-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_5: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%81%E1%85%A1%E1%86%AB%E1%84%81%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%92%E1%85%A2%E1%84%86%E1%85%A1-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_6: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%81%E1%85%A9%E1%86%BE%E1%84%80%E1%85%A6-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_7: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%82%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%89%E1%85%B5%E1%87%81%E1%84%8B%E1%85%B3%E1%86%AB+%E1%84%82%E1%85%A1%E1%84%87%E1%85%B5%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%A9%E1%84%80%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg",
    image_8: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB+%E1%84%83%E1%85%A9%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%A2-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_9: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%86%E1%85%A2%E1%84%92%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB+%E1%84%87%E1%85%AE%E1%86%AF%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%84%85%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_10: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%90%E1%85%AE%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%92%E1%85%A2%E1%84%91%E1%85%A1%E1%84%85%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg",
    image_11: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8B%E1%85%A3%E1%84%89%E1%85%A2%E1%86%BC%E1%84%8B%E1%85%B4+%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_12: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A9%E1%86%A8%E1%84%89%E1%85%B3%E1%84%85%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AB+%E1%84%80%E1%85%A5%E1%84%87%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_13: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%82%E1%85%AE%E1%86%AB%E1%84%87%E1%85%AE%E1%84%89%E1%85%B5%E1%86%AB+%E1%84%80%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg",
    image_14: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%83%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%87%E1%85%A5%E1%86%B7%E1%84%80%E1%85%A9%E1%84%85%E1%85%A2+-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_15: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%87%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%BC%E1%84%8E%E1%85%B5%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A5-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg", 
    image_16: "https://booknetworkservice.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9/%E1%84%8B%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%86%AB%E1%84%92%E1%85%B4%E1%86%AB%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%B7%E1%84%80%E1%85%A9%E1%84%85%E1%85%A2-%E1%84%8E%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A9.svg",
};

const titleWord = {
    image_1: "????????? ?????????",
    image_2: "????????? ????????????",
    image_3: "???????????? ??????", 
    image_4: "??????????????? ??????", 
    image_5: "????????? ??????", 
    image_6: "????????? ??????", 
    image_7: "???????????? ???????????????",
    image_8: "???????????? ?????????", 
    image_9: "???????????? ????????????", 
    image_10: "????????? ?????????",
    image_11: "????????? ??????", 
    image_12: "??????????????? ?????????", 
    image_13: "????????? ?????????",
    image_14: "????????? ?????????", 
    image_15: "????????? ????????????", 
    image_16: "????????? ???????????????",
};

export { titles, titleWord };
