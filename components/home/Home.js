const Home = () => {
  return (
    <>
      <div className="pt-[70px]">
        <div className="flex flex-col">
          <div className="bg-gradient-to-b from-[#ff807c] to-[#fd4b47] py-24 ">
            <div className="container mx-auto">
              <div className="flex items-center">
                <div>
                  <p className="text-5xl">สมัครเป็นสมาชิก</p>
                  <p className="text-5xl">
                    สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
                  </p>
                </div>
                <div>
                  <img src="https://www.swensens1112.com/images/banner-image.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-16 text-black ">
            <div className="container mx-auto">
              <p>ติดต่อเรา</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
