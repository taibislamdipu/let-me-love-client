import { FiRefreshCcw } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function FeatureCards() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Free Shipping Card */}
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 p-6">
          <div className="flex-shrink-0">
            <MdOutlineLocalShipping className="h-10 w-10 text-rose-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Free Shipping</h3>
            <p className="text-gray-500">Order over $200</p>
          </div>
        </div>

        {/* Money Returns Card */}
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 p-6">
          <div className="flex-shrink-0">
            <FiRefreshCcw className="h-10 w-10 text-rose-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Money Returns</h3>
            <p className="text-gray-500">30 days money returs</p>
          </div>
        </div>

        {/* 24/7 Support Card */}
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 p-6">
          <div className="flex-shrink-0">
            <LuClock className="h-10 w-10 text-rose-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
            <p className="text-gray-500">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
