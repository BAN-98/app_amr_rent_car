import React from "react";
export class Input extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const { id, type, placeholder, register, required } = this.props
        return (

            <input
                id={id}
                type={type}
                {...register(id, { required })}
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder={placeholder}
            />

        )
    }
}