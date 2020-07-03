class Player{
    //static centerPuyo;
    //static movablePuyo;
    //static puyoStatus;
    //static centerPuyoElements;
    //static movablePuyoElement;

    //static groundFrame;
    //static keyStatus;

    //static actionStartFrame;
    //static moveSource;
    //static moveDestination;
    //static rotateBeforeLeft;
    //static rotateAfterLeft;
    //static rotateFrameRotation;

    static initialize(){
        //キーボードの入力を確認する
        this.keyStatus = {
            right: false,
            left: false,
            up: false,
            down: false
        };
        //ブラウザのキーボードの入力を取得するイベントリスナを登録する
        document.addEventListener('keydown', (e) => {
            //キーボードが押された場合
            switch(e.keyCode){
                case 37:    //左向きのキー
                    this.keyStatus.left = true;
                    e.preventDefault();
                    return false;
                case 38:    //上向きのキー
                    this.keyStatus.up = true;
                    e.preventDefault();
                    return false;
                case 39:    //右向きのキー
                    this.keyStatus.right = true;
                    e.preventDefault();
                    return false;
                case 40:    //下向きのキー
                    this.keyStatus.down = true;
                    e.preventDefault();
                    return false;
            }
        });
        document.addEventListener('keyup', (e) => {
            //キーボードが離された場合
            switch(e.keyCode){
                case 37:    //左向きのキー
                    this.keyStatus.left = false;
                    e.preventDefault();
                    return false;
                case 38:    //上向きのキー
                    this.keyStatus.up = false;
                    e.preventDefault();
                    return false;
                case 39:    //右向きのキー
                    this.keyStatus.right = false;
                    e.preventDefault();
                    return false;
                case 40:    //下向きのキー
                    this.keyStatus.down = false;
                    e.preventDefault();
                    return false;
            }
        });
        //タッチ操作追加
        this.touchPoint = {
            xs: 0,
            ys: 0,
            xe: 0,
            ye: 0
        }
        document.addEventListener('touchstart', (e) => {
            this.touchPoint.xs = e.touches[0].clientX
            this.touchPoint.ys = e.touches[0].cluentY
        })
        
    }
}