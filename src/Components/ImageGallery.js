import React, { PureComponent } from "react";
import { react as autoBind } from "auto-bind";
import ImageModal from "./ImageModal";

const images = [
    'https://picsum.photos/id/1018/3914/2935',
    'https://picsum.photos/id/1015/6000/4000',
    'https://picsum.photos/id/1016/3844/2563',
    'https://picsum.photos/id/1022/6000/3376',
    'https://picsum.photos/id/1032/2880/1800',
    'https://picsum.photos/id/1025/4951/3301',
    'https://picsum.photos/id/1039/6945/4635',
    'https://picsum.photos/id/1043/5184/3456',
    'https://picsum.photos/id/106/2592/1728'
];


class ImageGallery extends PureComponent {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    state = { currentIndex: null };

    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    
    render() {
        const { currentIndex } = this.state;
        return (
            <div className="gallery-container">
                <h1>Simple Image Gallery with React</h1>
                <div className="gallery-grid">
                    {images.map((image, index) =>
                        (<div onClick={(e) => this.openModal(e, index)} key={image}>
                            <img src={image} alt="Panorama" />
                        </div>)
                    )}
                </div>
                <ImageModal
                    closeModal={this.closeModal}
                    src={images[currentIndex]}
                />
            </div>
        )
    }
}

export default ImageGallery;